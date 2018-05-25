# 리눅스

## Amazon Linux 타임 존 변경

사용할 표준 시간대 식별
```
ls /usr/share/zoneinfo
```

/etc/sysconfig/clock 파일을 표준 시간대로 업데이트
```
sudo vi /etc/sysconfig/clock
ZONE="Asia/Seoul"
```

인스턴스가 현지 시간 정보를 참조할 수 있게 /etc/localtime에 선택한 표준 시간대 파일 심볼 링크 생성
```
sudo ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
```

재부팅 후 표준 시간대 적용
```
sudo reboot
```

[시간 설정 참조](https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/set-time.html)
