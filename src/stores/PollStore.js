import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "this or that?",
    answerA: "this",
    answerB: "that",
    votesA: 9,
    votesB: 15,
  },
]);

export default PollStore;
