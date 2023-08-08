import "./App.css"
const name = "Hello World";
const obj = { name: "Hello World Object" }
const data = ['We', 'are', 'United'] //Show these in seperate tags
const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }] //Show these in seperate tags
const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }]


function App() {
  return (
    <div>
      <div>

        <h1 className="question">Question 1</h1>
        <h2>{name}</h2>
        <hr />
        <h2>{obj.name}</h2>
        <hr />
        <h3>{data[0]}</h3>
        <h3>{data[1]}</h3>
        <h3>{data[2]}</h3>
        <hr />
        <ul>
          <li>{list[0].name}</li>
          <li>{list[1].name}</li>
          <li>{list[2].name}</li>
        </ul>
        <hr />
        <h3>{"COMPANY : " + complex[0].company}</h3>

        <ul>
          <li>JOBS</li>
          <ul>
            <li>{complex[0].jobs[0]}</li>
            <li>{complex[0].jobs[1]}</li>
          </ul>
        </ul>

        <h3>{"COMPANY : " + complex[1].company}</h3>

        <ul>
          <li>JOBS</li>
          <ul>
            <li>{complex[1].jobs[0]}</li>
            <li>{complex[1].jobs[1]}</li>
          </ul>
        </ul>
        <hr />
      </div>
      <div>
        <h1 className="question">Question 2</h1>
        <h3>1. Import Something from 'package'</h3>
        <p>This is like unwrapping a toy and saying, "I want a surprise toy!" You don't know exactly which toy you'll get, but you're excited to see what's inside. So, when you say <b>import Something from 'package'</b>, you're getting a surprise toy from the package. You can play with it without knowing its specific name.</p>

        <h3>{"2. Import {Something} from 'package'"}</h3>
        <p>{`Now, this is a bit different. It's like looking at the wrapping paper and saying, "I want the toy with the robot
   picture." You're being specific about which toy you want. So, when you say import { Something } from 'package', you're
    choosing a toy by its name, like the one with the robot picture on the wrapper. Then you can play with that specific 
    toy.`}</p>
        <hr />
      </div>
      <div>

      </div>
      <div className="card">
        <h4>ID : 1</h4>
        <p>Name : Ahmed Karim</p>
        <p>User Name : nagda</p>
        <p>Email : ahmed@gmail.com</p>
        <p>Phone: 03061668012</p>
        <p>Website: hildegard.org</p>

      </div>




    </div>
  );
}

export default App;


