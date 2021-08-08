export class ToDoListService {
    // We're using a stringified array to simulate sending the data to an API
    private toDoList: string = JSON.stringify([
        'Mow the lawn',
        'Watch Jungle Cruise on Disney+',
        'Decorate the guest bedroom'
    ]);

    constructor() {}
    
    public saveNewToDo(toDo: string) {
        if (toDo?.length > 0) {
            let toDoListArray: string[] = JSON.parse(this.toDoList);
            toDoListArray.push(toDo);
            this.toDoList = JSON.stringify(toDoListArray);
        }
    }
    
    public getToDoList(): string[] {
        return JSON.parse(this.toDoList);
    }
}