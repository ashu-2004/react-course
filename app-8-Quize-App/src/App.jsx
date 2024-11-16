import { useEffect, useState } from "react";
import "./App.css";
import Quize from "./components/Quize";

function App() {
  const [quizes, setQuizes] = useState([]);
  let i = 0;
  const url =
    "https://quizapi.io/api/v1/questions?apiKey=7aHtTc3YhD44ci8Adojzr7LzR2mDMlDfFtWxAfLv";
  async function fetchApi() {
    let result = await fetch(url);
    // console.log(result);
    let data = await result.json();
    // console.log(data);
    let question = data[i].question;
    // console.log(data[i].correct_answers)
    let options = data[i].answers;
    // console.log(options);
    let { answer_a, answer_b, answer_c, answer_d, answer_e, answer_f } =
      options;
    let z = answer_a;
    let b = answer_b;
    let c = answer_c;
    let d = answer_d;
    let e = answer_e;
    let f = answer_f;

    let answers = [data[i].correct_answers];
    // console.log(answers);
    let [a] = [Object.keys(answers[i])];
    // console.log(a);
    let ans;
    if (answers[i].answer_a_correct === "true") {
      ans = a[0];
    } else if (answers[i].answer_b_correct === "true") {
      ans = a[1];
    } else if (answers[i].answer_c_correct === "true") {
      ans = a[2];
    } else if (answers[i].answer_d_correct === "true") {
      ans = a[3];
    } else if (answers[i].answer_e_correct === "true") {
      ans = a[4];
    } else if (answers[i].answer_f_correct === "true") {
      ans = a[5];
    }
    let answerIs = ans;
    let quize = {
      quize: question,
      optionA: z,
      optionB: b,
      optionC: c,
      optionD: d,
      answer: answerIs,
    };

    setQuizes(quize);
  }


  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="content">
      <div className="modal-content rounded-4 shadow cnt1">
        <h1>Quize App</h1>
        <Quize quize={quizes}></Quize>
      </div>
    </div>
  );
}

export default App;

