// console.log("Hi");

// // 알럿트 - 경고

// alert("뭘 봐?");

// // alert() 안에 글을 적으면 그대로 경고창 띄워준다.
// // 잘못했을 때 => 내가 개발해놓은 흐름대로 사용자가 흘러가지 않을때.
// // ++ 좋은 소식을 알릴때도 가능

// alert("환영합니다.");

// const 안녕 = "ㅎㅇ";
// alert(안녕);

// 컨펌 -> 확인하다
// if 조건문
// if (나의 조건) {
// 내가 작성하고 싶은 코드는 항상 {} 안에 적음
// }

// else => 선행되어서 선언한 조건이 아니면
// 앞의 조건이 아닌 모든 조건을 말함
// 100 => 1:99

// if (confirm("정말 지울거임??")) {
//   // ok 눌렀을때 실행될 코드
//   console.log("삭제 ㄱㄱ");
// } else {
// //   // cancel 눌렀을때 실행될 코드
// //   console.log("삭제 ㄴㄴ");
// }

document.write("<button id='btn'>MyBtn</button>");
const btn = document.getElementById("btn");
btn.innerText = "버튼";

// string=문자열
// btn.onclick =

// () => {
//     //   const name = prompt("이름이 모에요?");

//     //   const realName = "박은희";

//     //   if (name.length === 0) {
//     //     return alert("이름을 입력하세요");
//     //   }

//     //   if (name !== realName) {
//     //     return alert("이름이 다릅니다.");
//     //   }

//     //   alert("이름이 맞네요!");

//     const text = "박        은희";
//     const first = "은희";
//     const last = "박";

//     // 문자열 => string 스츠링

//     console.log(typeof text);
//     console.log(last + first);
//     console.log(last, first);

//     const fullName = `${last}     ${first}`; // ``  안에는 변수 적을 수 있음 ${} 안에 변수명 적으면 됨

//     console.log(fullName);

//     // 문자열 + 문자열 하고 싶을 때는 기호 + 를 사용해서 붙임
//     // 띄워씨기 1칸을 구현하고 싶을 때 `` 사용 `${변수명} ${변수명}`
//     btn.innerText = `${last}  ${first}`;
//     // 문자열의 길이 = 변수명.length
//     console.log(fullName.length);
//     // 문자열의 길이가 0일때 === 빈 문자열 === 아무것도 안씀
//   };

// 함수 선언하기

// const/let/var 화살표 함수

// function 함수명

function 더하기() {
  // 코드 작성하는 곳
  console.log("더하기 하겠음");
  const a = 50;
  const b = 49;
  const res = a + b;

  console.log(res);

  const ta = "50";
  const tb = "49";

  const tres = ta / tb;

  console.log(typeof a, b);
  console.log(typeof ta, tb);
  console.log(tres);

  // 더하기 + , 빼기 -, 곱하기 *, 나누기 /

  // 비교하는 법
  // 문자열 ==, !=, ===, !==  // ! 는 반대 또는 아니다 뜻.
  // == : 같다, === : 같다 , != : 다르다, !== 다르다

  // == 얕은 비교 계급장 때고 대충 검사 (!=)
  // === 깊은 비교 => 타입까지 체크 함. (!==)

  if (a === ta) {
    console.log("같은 값입니다.");
  } else {
    console.log("다른 값입니다.");
  }
}

//문자열, 숫자

// null, undefined  => 아무 값도 없음.
// null vs undefined

// 일단 값을 넣어주긴 해야하는데 뭘 넣어야할지 모를때
// let baby = {
//     regi: null,
// };

// baby.regi = "12312312312";

//undefined : 선언되지 않았거나 아예 없을때

// const me = 'me'
// [] Array

// Object 오브젝트, 객체

// Priaitive value 원시적인 기초적인 친구들 => 문자열, 숫자, undefined, null
// 하찮게 봄, 대우 ㄴㄴ

// Objext 오브젝트, 객체 {}, []
// {} : 객체
// [] : Array, 배열

// => 메모리를 할당해서 만들어 줌.
// = 비용이 발생한다. 모시고 있는 듯이 대우.

// 자바는 객체지향.

// {} => 객체
const user = {
  name: "박은희", // , 로 구분
  tel: "01012341234",
  id: "123123",
};

//function

const 유저확인 = () => {
  console.log(user);

  // user의 하위 값 접근법 2가지.

  // 1. user.값
  console.log(user.name);
  console.log(user.tel);
  console.log(user.id);

  // 2. usr['값']
  console.log(user["name"]);
  console.log(user["tel"]);
  console.log(user["id"]);

  //1. me 라는 이름의 변수를 선언하고 객체를 만든다.

  // 2. Me 라는 객체 안에 값으로 first=> 은희, last => 성

  // 3. me의 last 와 first를 각각 출력해보세요. console.log()

  const me = {
    last: "박",
    first: "은희",
    age: 31,
    gender: "여성",
    family: {
      father: "박아빠",
      mother: "천엄마",
    },
  };

  console.log(me.last, me.first);
  console.log(me);
  console.log(me.family.father);
};

let array = ["a", "b", "c", "d", "e", "f", "g"];
let users = ["김명준"];
const 배열확인 = () => {
  console.log("배열을 만들어요");

  // 삭제하는 법 pop, shift 내장 함수 사용

  // 배열.pop() ==> ()  안에 아무것도 안넣음 대신에 제일 뒤에거 한개 지움 여러개 안돼

  //   array.pop();

  //   array.shift();  // 제일 앞에거 하나씩 지움.

  // 배열.splice() => (index, count) 몇번째 인덱스인지 넣고 , 해당 index부터 삭제를 몇 번 할지

  //   array.splice(4, 1);

  const string = prompt("삭제하고 싶은 알파벳을 입력하세요");
  // 배열.findIndex()
  const index = array.findIndex((text) => {
    //
    if (text === string) {
      return text;
    }
  });

  if (index < 0) {
    return alert("없음");
  }

  console.log(index);
  array.splice(index, 1);

  // 배열 선언할때 [] 안에 값을 넣어줌

  const text = prompt("알파벳을 입력하세요.");

  //   array.push("e", "f", "g"); // push() => 배열의 제일 마지막 아이템을 추가
  //   array.unshift("e", "f", "g"); // unshift() => 배열의 첫번째 아이템을 추가

  // 배열은 순서가 있다.

  // 배열.내장함수()
  console.log(array.length);

  //   배열.length 를 사용해서 제일 마지막 아이템의 인덱스를 구하기

  // 마지막 인덱스 = 배열 최대 index 값은 배열.length -1 배열의 길이에서 1만큼 뺀값
  //   const index = array.length - 1;

  console.log(array[index]);

  // 첫번째 아이템의 인덱스는 0부터 시작한다.
  //   const index = 2;
  //   console.log(array[0]);

  console.log(array);
};

// 1. function, const, let, var 중 하나를 선택해서 함수명 배열을 가지고 놀기를 만들어 주세요.

function 배열가지고놀기() {
  // 2. console.log(array) 를 했을 때 제일 뒤에 'z'를 추가한 값을 출력해 주세요

  array.push("z");
  console.log(array);
  // 3. 제일 앞에 '0' 넣어주세요.
  array.unshift("0");
  console.log(array);
  // 4. 제일 뒤에 'y', 'x' 넣어주세요.
  array.push("y", "x");
  console.log(array);
  // 5. 앞에 두개 지워서 출력해주세요.
  array.splice(0, 2);
  console.log(array);
  // 6. 뒤에 3개 지운뒤 출력해주세요.
  console.log(array);
  // 7. e 찾아서 지운 뒤 출력해주세요.
  console.log(array);
}
// 2. const 를 사용해서 변수명 name을 선언하고 값으로 prompt() 로 할당해줌.

btn.onclick = 배열가지고놀기;
