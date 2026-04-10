# Stone TD Official Website

한국 원스토어 소프트 런칭을 위한 Stone TD 공식 웹사이트입니다.
GitHub Pages 무료 호스팅을 사용하며, 이 저장소 자체가 웹사이트입니다.

## 📁 구조

```
stone-td-website/
├── index.html      # 게임 홈페이지 (한국어)
├── privacy.html    # 개인정보처리방침 (한국어 + 영어)
├── terms.html      # 이용약관 (한국어 + 영어)
├── style.css       # 공통 스타일시트 (다크 테마, 모바일 반응형)
└── README.md       # 이 파일
```

## 🚀 GitHub Pages 설정 가이드 (10분)

### 1단계: GitHub 저장소 생성

1. https://github.com 접속 후 로그인 (계정: `flamepunchstudio`)
2. 우상단 **+ → New repository** 클릭
3. 설정:
   - **Repository name**: `stone-td-website`
   - **Description** (선택): `Stone TD 공식 웹사이트 + 법적 문서`
   - Visibility: **Public** ← GitHub Pages는 Public 필수 (Free 플랜)
   - **Initialize with a README**: ❌ (체크 해제 — 이미 있음)
4. **Create repository** 클릭

### 2단계: 로컬 폴더를 GitHub에 푸시

터미널(Git Bash, PowerShell 등)에서 `D:/stone-td-website/` 폴더로 이동 후 실행:

```bash
cd D:/stone-td-website

# Git 초기화
git init
git branch -M main

# 파일 스테이징 + 첫 커밋
git add .
git commit -m "Initial commit: Stone TD website + legal docs"

# GitHub 저장소 연결 + 푸시
git remote add origin https://github.com/flamepunchstudio/stone-td-website.git
git push -u origin main
```

> 💡 **인증 실패 시**: GitHub Personal Access Token이 필요할 수 있습니다.
> `Settings → Developer settings → Personal access tokens → Tokens (classic)` 에서
> `repo` 권한으로 토큰 생성 후 비밀번호 대신 사용하세요.

### 3단계: GitHub Pages 활성화

1. GitHub에서 `stone-td-website` 저장소 페이지 접속
2. 상단 탭 **Settings** → 좌측 메뉴 **Pages** 클릭
3. 설정:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `/ (root)`
4. **Save** 클릭
5. 1~2분 대기 후 페이지 새로고침 → 상단에 초록색 박스로 URL 표시됨:

   ```
   ✓ Your site is live at https://flamepunchstudio.github.io/stone-td-website/
   ```

### 4단계: 동작 확인

브라우저에서 아래 URL들이 모두 정상 접속되는지 확인:

- 🏠 **홈페이지**: https://flamepunchstudio.github.io/stone-td-website/
- 🔐 **개인정보처리방침**: https://flamepunchstudio.github.io/stone-td-website/privacy.html
- 📜 **이용약관**: https://flamepunchstudio.github.io/stone-td-website/terms.html

모바일에서도 확인 (DevTools → Device toolbar → iPhone 14 등):
- 레이아웃이 깨지지 않는지
- 메뉴가 정상 클릭되는지
- 텍스트가 읽기 편한지

## 🔄 업데이트 방법

내용 수정 후 다음 명령어로 바로 반영됩니다:

```bash
cd D:/stone-td-website
git add .
git commit -m "Update: 변경 내용 설명"
git push
```

푸시 후 1~2분이면 GitHub Pages에 자동 반영됩니다.

## 📝 수정이 필요할 수 있는 부분

### 사전 배포 체크리스트

- [ ] `privacy.html`: 발효일 / 최종 수정일 확인
- [ ] `terms.html`: 발효일 / 최종 수정일 확인
- [ ] `index.html`: 게임 설명이 정확한지 검토
- [ ] 모든 파일: `support@flamepunch.com` 이메일 주소 확인
- [ ] 스크린샷 추가 (선택): `index.html`의 Hero 섹션에 게임 스크린샷 3~5장

### 원스토어 런칭 직전

- [ ] `index.html` 다운로드 섹션의 "Coming Soon" → 실제 원스토어 링크로 교체
- [ ] `privacy.html` 마지막 수정일 업데이트
- [ ] `terms.html` 마지막 수정일 업데이트

### Google OAuth 검증 신청 시

- [ ] `privacy.html`에서 수집 데이터 항목이 실제 앱과 일치하는지 재확인
- [ ] `index.html`의 앱 이름 / 스튜디오 이름이 Google Cloud Console과 일치하는지 확인

## 🌐 커스텀 도메인 (선택, 향후)

추후 `stonetd.com` 같은 커스텀 도메인을 연결하려면:

1. 도메인 구입 (Namecheap, GoDaddy, Google Domains 등)
2. `stone-td-website` 저장소에 `CNAME` 파일 생성 (내용: `stonetd.com`)
3. DNS 설정: CNAME 레코드로 `flamepunchstudio.github.io` 연결
4. GitHub Pages 설정에서 "Custom domain" 입력 + "Enforce HTTPS" 체크

단, 커스텀 도메인 사용 시 **Google Cloud Console의 Authorized domains와 OAuth Consent Screen의 URL도 함께 변경**해야 합니다.

## 📞 문의

- **Developer**: Flamepunch Studio
- **Email**: support@flamepunch.com
- **Game**: Stone TD (Castle Defense + Roguelite)

---

© 2026 Flamepunch Studio. All rights reserved.
