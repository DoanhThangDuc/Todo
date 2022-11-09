import { makeAutoObservable } from "mobx";
import { v4 as uuidV4 } from "uuid";

export type Status = "checked" | "unchecked" | "crossed";
export interface TodoItemModal {
  content: string;
  status: Status;
  id: string;
  strikeThrough: boolean;
}
export class TodoStoreImplement {
  todoItems = [] as TodoItemModal[];
  filter = "unchecked" as Status;

  constructor() {
    makeAutoObservable(this);
  }

  onSubmitTodoContent = (todoInput: string) => {
    const id = uuidV4();
    const newItem = {
      content: todoInput,
      status: "unchecked" as Status,
      id: id,
      strikeThrough: false,
    };
    this.todoItems.push(newItem);
  };

  updateTodoItemStatus = ({
    itemId,
    itemStatus,
  }: {
    itemId: string;
    itemStatus: Status;
  }) => {
    const todoItemId = this.todoItems.findIndex((item) => item.id === itemId);
    if (todoItemId <= -1 && !itemStatus) return;
    this.todoItems[todoItemId].status = itemStatus;
  };

  handleUpdateStrikeThrough = (id: string) => {
    if (!id) return;
    const todoItemId = this.todoItems.findIndex((item) => item.id === id);
    if (this.todoItems[todoItemId].strikeThrough === true) {
      this.todoItems.splice(todoItemId, 1);
      return;
    }

    const idItemHasStrikeThrough = this.todoItems.findIndex(
      (item) => item.strikeThrough === true
    );
    if (idItemHasStrikeThrough > -1) {
      this.todoItems[idItemHasStrikeThrough].strikeThrough = false;
    }

    this.todoItems[todoItemId].strikeThrough = true;
  };

  updateFilterStatus = (status: Status) => {
    this.filter = status;
  };

  get todoItemsFiltered() {
    const itemsFiltered = this.todoItems.filter(
      (item) => (this.filter === "unchecked" || item.status === this.filter) ?? item
    );
    return itemsFiltered;
  }
}

export const todoStore = new TodoStoreImplement();
