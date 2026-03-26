import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  type Submission = {
    name : Text;
    email : Text;
    business : Text;
    message : Text;
  };

  module Submission {
    public func compare(submission1 : Submission, submission2 : Submission) : Order.Order {
      Text.compare(submission1.name, submission2.name);
    };
  };

  var nextId = 0;

  let submissions = Map.empty<Nat, Submission>();

  public shared ({ caller }) func submitDemoRequest(name : Text, email : Text, business : Text, message : Text) : async () {
    let id = nextId;
    nextId += 1;
    let submission : Submission = {
      name;
      email;
      business;
      message;
    };
    submissions.add(id, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray().sort();
  };
};
