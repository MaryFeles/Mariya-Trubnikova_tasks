import React from "react";
import Search from "./Search/Search";
import Counter from "./Counter/Counter";
import Tasks from "./Tasks/Tasks";
import Btn from "./AddingTask/AddingTaskModal";
import AuthModal from "./Auth/AuthModal";
import Message from "./Messages/Messages";

const Home = () => {
  return (
    <>
      <header className="header">
        <Search />
        <AuthModal />
      </header>

      <main className="main">
        <div className="main__header">
          <h1 className="main__title">
            You&apos;ve got{" "}
            <span className="highlighted-pink">
              <Counter /> task
            </span>{" "}
            today
          </h1>
          <Btn />
        </div>
        <div className="main__body">
          <Tasks />
        </div>
      </main>

      <aside className="aside">
        <Message></Message>
      </aside>
    </>
  );
};

export default Home;
