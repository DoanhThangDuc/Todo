import { makeObservable, observable, action, computed } from "mobx";

export class TodoStoreImplement {
  todoItems = [];
  filter = "all";

  constructor() {
    makeObservable(this, {
      todoItems: observable,
      filter: observable,
      onSubmitTodoContent: action,
      updateTodoItemStatus: action,
      handleUpdateStrikeThrough: action,
      updateFilterStatus: action,
      todoItemsFiltered: computed,
    });
  }

  onSubmitTodoContent(todoInput) {
    const newItem = {
      content: todoInput,
      status: "unchecked",
      id: this.todoItems.length + todoInput,
      strikeThrough: false,
    };
    this.todoItems.push(newItem);
  }

  updateTodoItemStatus(id, checkStatus) {
    const updatedItemStatus = this.todoItems.map((item) =>
      item.id === id ? { ...item, status: checkStatus } : item
    );
    this.todoItems = updatedItemStatus;
  }

  handleUpdateStrikeThrough(id) {
    const todoItem = this.todoItems.find((item) => item.id === id);
    if (!todoItem) return;
    if (todoItem.strikeThrough) {
      const deletedItem = this.todoItems.filter((item) => item.id !== id);
      this.todoItems = deletedItem;
      return;
    }
    const updatedItemsStrike = this.todoItems.map((item) => {
      if (item.id === todoItem.id) {
        return { ...item, strikeThrough: true };
      }
      return { ...item, strikeThrough: false };
    });
    this.todoItems = updatedItemsStrike;
    return;
  }

  updateFilterStatus(status) {
    this.filter = status;
  }

  get todoItemsFiltered() {
    const itemsFiltered = this.todoItems.filter(
      (item) => (this.filter === "all" || item.status === this.filter) ?? item
    );
    return itemsFiltered;
  }
}

export const TodoStore = new TodoStoreImplement();
