# NGINX

## nginx 최신 버전 설치 방법

* 아래 내용을 vi 또는 nano 에디터 등을 이용해서 /etc/yum.repos.d/nginx.repo로 저장.

baseurl의

OS에는 해당 플랫폼의 OS 종류 입력(rhel, centos 등등). Amazon Linux(2018.03 릴리즈)의 경우 centos를 입력하면 잘 작동

OSRELEASE는 OS의 버전 입력(6, 6.x, 7, 7.x 등등). Amazon Linux(2018.03 릴리즈)의 경우 6버전을 입력하면 잘 작동

$basearch는 플랫폼의 아키텍쳐를 입력(i386, x86_64). Amazon Linux(2018.03 릴리즈)의 경우 x86_64를 입력하면 잘 작동


$basearch의 경우 시스템 환경변수로 등록되어 있는경우 따로 지정을 안해줘도 되지만
Amazon Linux(2018.03 릴리즈)에서는 해당 환경변수가 없어서 직접 입력해줬음.

```
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/mainline/OS/OSRELEASE/$basearch/
gpgcheck=0
enabled=1
```

* 아래 명령어로 설치
```
sudo yum install nginx
```

* 설치 후 버전확인
```
nginx -v
```

* Amazon Linux(2018.03 릴리즈)에서 문제

/etc/yum.repos.d의 amzn-main.repo, amzn-updates.repo repository 때문에 최신버전 설치가 안됨.

설정으로 막는 방법도 있으나 잘 작동하지 않아서 nginx 설치시에만 잠시 amzn-main.repo와 amzn-update.repo 파일을 다른 위치로 옮기거나
다른 확장자로 변경해서 설치하면 됨.
