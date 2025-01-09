import { Component, OnInit } from '@angular/core';
import { UserListItemModel } from 'src/app/models/user-list-item.model';
import { UserService } from 'src/app/services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-lists.component.html',
  styleUrl: './user-lists.component.scss'
})
export class UserListsComponent implements OnInit {

  userListItems: UserListItemModel[] = [];
  currentPage: number = 1;
  pageSize: number = 5;
  totalItems: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUserLists();
  }

  loadUserLists(): void {
    const offset = (this.currentPage - 1) * this.pageSize;
    this.userService.getUserLists(offset, this.pageSize).subscribe(response => {
      this.userListItems = response.users;
      this.totalItems = response.totalItems;
    });
  }

  onPageChange(page: number): void {
    const totalPages = Math.ceil(this.totalItems / this.pageSize);
    if (page < 1 || page > totalPages) {
      return;
    }
    this.currentPage = page;
    this.loadUserLists();
  }

}
