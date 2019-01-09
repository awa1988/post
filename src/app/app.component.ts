import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';
import { PostService } from './post.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Post Json</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p style="word-break:break-word;">{{name}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = '';
  constructor(private postService: PostService, private modalService: NgbModal) {

  }
  ngOnInit() {
    this.getPost();
    this.secondsCounter.subscribe(() => {
      this.getPost();
    })
  }
  secondsCounter = interval(10000);
  posts = [];
  getPost() {
    this.postService.getPost().subscribe((resp: object) => {
      this.posts = resp.hits;
      console.log(this.posts)
    })
  }
  openJsonOnModal(post) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = JSON.stringify(post);
  }

}
