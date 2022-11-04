import TaskList from "../TaskList";
function Home() {
  return (
    <div>
      <h1 className="text-center font-bold pt-[2rem] text-[40px] text-yellow-100">
        Todo List
      </h1>
      <TaskList />
    </div>
  );
}

export default Home;
