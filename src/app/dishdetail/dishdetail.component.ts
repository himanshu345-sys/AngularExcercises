import { Location } from "@angular/common";
import { Component, Inject, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Comment } from "src/shared/Comment";
import { Dish } from "src/shared/dish";
import { DishService } from "../services/dish.service";

@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"],
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  dishIds: string[];
  next: string;
  previous: string;
  dishfeedbackForm: FormGroup;
  dishComment: Comment;

  formErrors = {
    'author': '',
    'comment': '',
  };

  validationMessages = {
    'author': {
      'required': 'Author is required',
      'minlength': 'Author name must be at least 2 characters long',
    },
    'comment': {
      'required': 'Comment is required',
    },
  };

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL
  ) {
    this.createForm();
    this.dishComment = new Comment();
  }

  createForm(): void {
    this.dishfeedbackForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2)]],
      rating: 5,
      comment: ['',[Validators.required]],
    });

    this.dishfeedbackForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );
    this.onValueChanged();
  }

  ngOnInit() {
    this.dishService
      .getDishIds()
      .subscribe((dishIds) => (this.dishIds = dishIds));
    this.route.params
      .pipe(
        switchMap((params: Params) => this.dishService.getDish(params["id"]))
      )
      .subscribe((dish) => {
        this.dish = dish;
        this.setPrevNext(dish.id);
      });
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.previous =
      this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next =
      this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  onValueChanged(data?: any) {
    if (!this.dishfeedbackForm) return;

    const form = this.dishfeedbackForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = "";
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];

        for (const key in control.errors) {
          if (control.errors.hasOwnProperty(key)) {
            this.formErrors[field] += messages[key] + " ";
          }
        }
      }
    }
  }

  onSubmit() {
    if (this.dishfeedbackForm.value) {
      this.dishComment.author = this.dishfeedbackForm.value.author;
      this.dishComment.date = new Date().toISOString();
      this.dishComment.comment = this.dishfeedbackForm.value.comment;
      this.dishComment.rating = this.dishfeedbackForm.value.rating;

      this.dish.comments.push(this.dishComment);
    }

    this.dishfeedbackForm.reset({
      author: '',
      rating: 5,
      comment: '',
    });
  }
}
