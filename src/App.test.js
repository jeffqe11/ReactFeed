import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

//enzyme config
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from "enzyme";

//components
import ListItemText from "@material-ui/core/ListItemText";
import Comments from "../src/components/commentsList";
import Post from "../src/components/post";
import AppBar from "../src/components/AppBarFeed";
import CommentField from "../src/components/commentField";

//store
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

describe("CommentList Component", () => {
  it("renders correctly", () => {
    const commentComponent = shallow(
      <Comments
        comments={[
          {
            postId: 1,
            id: 1,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body:
              "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
          },
        ]}
      />
    );

    expect(toJson(commentComponent)).toMatchSnapshot();
  });

  it("renders correctly two comments", () => {
    const commentComponent = shallow(
      <Comments
        comments={[
          {
            postId: 1,
            id: 1,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body:
              "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
          },
          {
            postId: 1,
            id: 2,
            name: "quo vero reiciendis velit similique earum",
            email: "Jayne_Kuhic@sydney.com",
            body:
              "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
          },
        ]}
      />
    );

    //two items correctly
    expect(commentComponent.find(ListItemText)).toHaveLength(2);
  });

  it("title correctly first comment", () => {
    const commentComponent = shallow(
      <Comments
        comments={[
          {
            postId: 1,
            id: 1,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body:
              "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
          },
          {
            postId: 1,
            id: 2,
            name: "quo vero reiciendis velit similique earum",
            email: "Jayne_Kuhic@sydney.com",
            body:
              "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
          },
        ]}
      />
    );

    var comment = commentComponent.find(ListItemText);

    //first comment text is correct
    expect(toJson(comment)[0].props.primary).toEqual(
      "id labore ex et quam laborum"
    );
  });
});

describe("Post Component", () => {
  it("renders correctly", () => {
    const component = mount(
      <Post store={store} title="Test" body="Test" comments={[]} id={1} />
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});

describe("AppBar Component", () => {
  it("renders correctly", () => {
    const appBarComponent = shallow(<AppBar />);

    expect(toJson(appBarComponent)).toMatchSnapshot();
  });
});

describe("Comment Field Component", () => {
  it("renders correctly", () => {
    const component = mount(<CommentField store={store} id={1} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
