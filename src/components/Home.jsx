import React from "react";
import Search from "./Search/Search";
import Counter from "./Counter/Counter";
import Tasks from "./Tasks/Tasks";
import Btn from "./AddingTask/AddingTaskModal";
import Auth from "./Auth/AuthModal";
import Messages from "./Messages/Messages";
import Layout from "antd/lib/layout/layout";

const Home = () => {
  return (
    <Layout className="container">
      <header className="header">
        <Search />
        <Auth />
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
        <Messages />
      </aside>
    </Layout>
  );
};

export default Home;
