import React from "react";
import { Comment, List } from "antd";
import { Content } from "antd/lib/layout/layout";

const CommentList = ({ comments }) => {
  return (
    <Content className="comments__list-wrap">
      <List
        dataSource={comments}
        header={`${comments.length} ${
          comments.length > 1 ? "replies" : "reply"
        }`}
        itemLayout="horizontal"
        renderItem={(props) => (
          <Comment className={"comments__item--"} {...props} />
        )}
      />
    </Content>
  );
};

export default CommentList;
