# process

프로세스는 실행중인 프로그램이며 할당된 작업을 수행하기 위해서 CPU 시간, 메모리, 파일, I/O 장치등의 리소스들이 필요하다.
리소스들은 프로세스를 생성하거나 실행할 때 필요하다.

프로세스의 생성, 스케줄링, 동기화 메커니즘, 통신, 교착상태 핸들링의 책임은 운영체제에게 있다.

## process state

프로세스는 현재 진행 상태에 따라 다음과 같은 상태를 가질 수 있습니다.

* New : Process 생성
* Running: 프로세스의 명령어 실행
* Waiting: I/O 작업, signal 등의 이벤트를 기다림
* Ready: 프로세스가 cpu를 할당받기 위해 기다림
* Terminated: 프로세스 종료

## process control block

각 프로세스들은 운영체제에 의해 process control block(PCB)로 관리됩니다.(task control block이라고도 함)

PCB는 실행에 필요한 각종 정보를 가지고 있습니다.

* Process state: 현재 프로세스의 state 정보
* Program counter: 다음 실행돼야할 명령어의 주소(cpu register에서 pc 주소와 동일)
* CPU registers: 운영체제 또는 하드웨어에 의해 interruped 되기 전의 cpu register 값
* CPU-scheduling information: 스케줄링 우선순위, scheduling 큐의 포인터 또는 스케줄링 값 등, 스케줄링에 필요한 정보
* Memory-management information: register base 또는 limit 값, paging 테이블, segment 테이블 등의 정보를 저장
* Account information: CPU 실제 사용시간, 시간 제한, 프로세스 숫자 등의 정보를 저장
* I/O status information: 프로세스에 할당된 I/O device 목록, 파일 등 저장