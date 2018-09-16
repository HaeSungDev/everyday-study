# java stream api

java stream api는 원본 데이터 소스에 여러가지 aggregate operation을 적용하고 변형하여 새로운 데이터를 만드는 api이다.

함수형 프로그래밍 style의 api로 각 연산시 저장하는 데이터가 존재하지 않고 완료된 결과 데이터를 다음 stream으로 전달한다.

## stream 특징

1. 스트림은 요소를 저장하지 않고 필요할 때 생성한다.
2. 스트림 연산은 원본을 변경하지 않고 새로운 스트림을 반환한다.
3. 스트림 연산은 가능하면 지연되고 연산 결과가 필요하기 전까지 실행되지 않는다.

## stream workflow

1. 스트림 생성
2. 스트림 연산을 통해 다른 스트림으로 변환. 여러 단계가 될 수 도 있음. (pipeline 이라고도 함)
3. 종료 연산을 적용. ex) list로 반환, 개수 반환 등

## stream 생성

* Array로 스트림 생성

```
int[] arr = { 1, 2, 3, 4, 5 };
Stream<int> numStream = Arrays.stream(arr)
```

* Stream.of 메소드로 스트림 생성

```
Stream<int> numStream = Stream.of(1, 2, 3, 4, 5);
```

* 무한 스트림 생성

```
// String "Echo" 무한 스트림
Stream<String> echos = Stream.generate(() -> "Echo");

// Double 난수 값 무한 스트림 생성(lambda에 전달할 인자가 없음)
Stream<Double> randoms = Stream.generate(math::random);

// BigInteger 무한 수열 생성(lambda의 이전 결과가 lambda 인자 값으로 전달)
Stream<BigInteger> integers = Stream.iterate(BigInteger.ZERO, n -> n.add(BigInteger.ONE));
```

## stream 메소드

* filter 메소드

filter 메소드에서 true를 반환하는 경우의 데이터만으로 스트림을 만든다.

```
// filter 메소드를 이용해 홀수인 int stream 생성.
Stream.of(1, 2, 3, 4, 5).filter(n -> n % 2 == 1);
```

* map, flatMap 메소드

map 메소드는 현재 스트림 데이터를 가공해서 새로운 스트림을 만든다.

flatMap 메소드는 map 메소드와 같은 기능을 하지만 데이터 가공시 stream 자체를 반환하는 경우 일반 데이터 스트림으로 합쳐준다.

```
Stream.of(1, 2, 3, 4, 5).map(n -> n * 2); // --> [2, 4, 6, 8, 10]
Stream.of(1, 2, 3, 4, 5).map(n -> Stream.of(n)); // --> [[2], [4], [6], [8], [10]]
Stream.of(1, 2, 3, 4, 5).flatMap(n -> Stream.of(n)); // --> [2, 4, 6, 8, 10]
```

* limit 메소드

n개의 데이터의 stream을 반환. 원본 데이터가 n보다 작으면 원본이 끝날 떄까지의 데이터 stream 반환.

```
Stream.of(1, 2, 3, 4, 5).limit(3); // --> [1, 2, 3]
```

* skip 메소드

처음 n 개의 데이터를 제외한 stream 반환.

```
Stream.of(1, 2, 3, 4, 5).skip(2); // --> [3, 4, 5]
```

* concat 정적 메소드

두 stream을 연결해준다

```
Stream.concat(Stream.of(1,2,3), Stream.of(4,5,6)); // --> [1, 2, 3, 4, 5, 6]
```