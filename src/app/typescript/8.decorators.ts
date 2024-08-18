//class decorator
@printDecoratorData //this is how you use a decorator
class Manager {
  task: string = "SimpleTask";
  project: string = "simpleProject";

  constructor() {
    console.log("initialize the manager class");
  }
}

//this is how you write a decorator
function printDecoratorData(value: Function, context: ClassDecoratorContext) {
  console.log("value", value);
  console.log("context", context);
  context.addInitializer(() => {
    console.log("initialize class ", context.name);
  });

  value.prototype.setUpADate = new Date().toISOString(); // this will show up in the prototype of the class
}

//field decorators

type Task = {
  name: string;
  level: "low" | "medium" | "complicated";
};

class Manager2 {
  @withComplicatedTask
  tasks: Task[] = [];
}

function withComplicatedTask<T, V extends Task[]>(
  target: undefined,
  context: ClassFieldDecoratorContext<T, V>
) {
  return function (args: V) {
    args.push({
      name: "added task",
      level: "complicated",
    });
    return args;
  };
}

// decorator factories

class Manager3 {
  @withTask({
    name: "added task",
    level: "low",
  })
  tasks: Task[] = [];
}

function withTask(task: Task) {
  return function <T, V extends Task[]>(
    target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (args: V) {
      args.push({
        name: "added task",
        level: "low",
      });
      return args;
    };
  };
}

//method decorators

class Project {
  budget: number = 900;

  @withBudget(10)
  writeTests() {
    console.log("tests are important!");
  }

  @withBudget(100)
  fixBugInProduction() {
    console.log("tests are important!");
  }
}

const project = new Project();
project.fixBugInProduction();
project.fixBugInProduction();

function withBudget(budget: number) {
  return function <T extends { budget: number }>(
    target: Function,
    context: ClassMethodDecoratorContext<T>
  ) {
    return function (...args: any) {};
  };
}

//accessor decorators

class Manager4 {
  @watchChange
  //auto-accessor, unlike regular fields, define a getter and setter of the class prototype
  accessor project1: string = "simple project";
}

const manager = new Manager4();
manager.project1 = "comlicated project";
manager.project1 = "super comlicated project";

function watchChange<T, V>(
  accessor: { get: (this: T) => V; set: (this: T, v: V) => void },
  context: ClassAccessorDecoratorContext<T, V>
) {
  return {
    get: function (this: T) {
      return accessor.get.call(this);
    },
    set: function (this: T, value: V) {
      console.log(`setting ${context.name.toString()} to ${value}`);
      accessor.set.call(this, value);
    },
  };
}
