import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem(
    $itemName: String!
    $itemDesc: String!
    $itemPrice: String!
    $itemImage: String
  ) {
    addItem(
      itemName: $itemName
      itemDesc: $itemDesc
      itemPrice: $itemPrice
      itemImage: $itemImage
    ) {
      _id
      itemName
      itemDesc
      itemPrice
      itemImage
      postedAt
    }
  }
`;
