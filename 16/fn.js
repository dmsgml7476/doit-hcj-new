const isPersonAdult = (name, age /*props, args, params 인자*/) => {
  // 인자를 받아 올 수 있다. 위치는 () 안, 여러개의 인자는, 로 구분
  // 받아오는 인자의 이름은 함수를 만드는 사람이 임의대로 조절 가능
  // 순서는 꼭 지켜야 한다.

  //   const name = prompt("이름을 알려주세요.");

  if (name.length <= 1) {
    return alert("마, 이름을 그것밖에 입력 못하겠으?");
  }

  //   const age = prompt("그래서, 나이가 어떻게 되시는데요?");

  if (age < 19) {
    return alert("청소년입니다.");
  }
  console.log(`${name} 님은 성인입니다`);
};

isPersonAdult("최예", 19);

// 인자값 넣는 순서가 중요.
