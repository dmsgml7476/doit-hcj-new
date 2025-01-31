const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
let users = [
  { name: "박건태", password: "123111" },
  { name: "곽찬양", password: "321123" },
  { name: "김현진", password: "123123" },
  { name: "이정훈", password: "123123" },
];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const member = {
    name: name.value,
    password: password.value,
  };

  if (member.name.lenght === 0) {
    alert("이름을 입력하세요");
    return name.focus();
  }

  if (member.password.lenght === 0) {
    alert("비밀번호를을 입력하세요");
    return password.focus();
  }

  //   배열. find ()  함수
  // undefined 또는 배열의 아이템과 같은 형태
  const found = users.find((item) => item.name === member.name);

  if (!found) {
    if (confirm("존재하지 않는 회원입니다. 회원가입하시겠습니까?")) {
      users.push(member);

      alert("회원가입을 축하합니다.");
    } else {
      console.log("다시 로그인 ㄱㄱ");
    }
  } else {
    if (found.password === member.password) {
      alert("환영합니다.");
      return;
    }
    alert("비밀번호가 틀렸습니다.");
  }
  console.log(found);
  console.log(member);

  let array = ["a", "b", "c", "d"];
  // a가 있는지 검사
  const found_array = array.find((item) => item === "a");

  let fruits = [
    { name: "딸기" },
    { name: "배" },
    { name: "사과" },
    { name: "키위" },
    { name: "망고" },
  ];
  // 포도가 있는지 검사합니다.

  const found_fruits = fruits.find((item) => item.name === "포도");
});
