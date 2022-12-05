import { gql } from "@apollo/client";

export const QUERY_ALL_ITEMS = gql`
  {
    items {
      _id
      itemName
      itemDesc
      itemPrice
      itemImage
    }
  }
`;

export const QUERY_ITEM = gql`
  query item($_id: ID!) {
    item(_id: $_id) {
      itemName
      itemDesc
      itemPrice
      itemImage
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      itemCount
      items {
        itemName
        itemDesc
        itemPrice
        itemImage
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($items: [ID]!) {
    checkout(items: $items) {
      session
    }
  }
`;
