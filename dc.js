else if (answer.validation == 'numeric') {
    this.questionForm?.addControl(
      `${this.currentUseCaseId}_question_${question.questionId}_${answer.answerId}`,
      this.formBuilder.control('', [
        Validators.pattern(/^\d+\.\d{2}$/),
      ])
    );
  }