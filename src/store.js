import { makeAutoObservable } from "mobx";

export class TodoStoreImplement {
  todoItems = [];
  filter = "all";

  constructor(arg) {
    makeAutoObservable(this);
  }

  onSubmitTodoContent = (todoInput) => {
    const newItem = {
      content: todoInput,
      status: "unchecked",
      id: this.todoItems.length + todoInput,
      strikeThrough: false,
    };
    this.todoItems.push(newItem);
  };

  updateTodoItemStatus = ({ itemId, itemStatus }) => {
    const todoItemId = this.todoItems.findIndex((item) => item.id === itemId);
    if (todoItemId <= -1 && !itemStatus) return;
    this.todoItems[todoItemId] = {
      ...this.todoItems[todoItemId],
      status: itemStatus,
    };
  };

  handleUpdateStrikeThrough = (id) => {
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
      this.todoItems[idItemHasStrikeThrough] = {
        ...this.todoItems[idItemHasStrikeThrough],
        strikeThrough: false,
      };
    }

    this.todoItems[todoItemId] = {
      ...this.todoItems[todoItemId],
      strikeThrough: true,
    };
  };

  updateFilterStatus = (status) => {
    this.filter = status;
  };

  get todoItemsFiltered() {
    const itemsFiltered = this.todoItems.filter(
      (item) => (this.filter === "all" || item.status === this.filter) ?? item
    );
    return itemsFiltered;
  }
}

export const todoStore = new TodoStoreImplement();
