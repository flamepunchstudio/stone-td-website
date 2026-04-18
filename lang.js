/**
 * Stone TD 웹사이트 다국어 전환 로직
 *
 * 동작:
 * - 기본 언어: 한국어 (ko)
 * - 사용자 선택은 localStorage에 저장 → 재방문 시 자동 복원
 * - 버튼 클릭 시 body 클래스 토글 (show-ko ↔ show-en)
 * - CSS가 body 클래스 기반으로 [data-lang="..."] 요소 표시/숨김 처리
 * - document.title과 meta description도 함께 업데이트
 */
(function () {
  "use strict";

  var STORAGE_KEY = "stonetd-lang";
  var DEFAULT_LANG = "ko";

  // 페이지별 title / description 정의
  // data-title-ko, data-title-en 속성으로 <body>에 설정해도 됨
  var titles = {
    index: {
      ko: "스톤 타워 디펜스: 영웅의 증명",
      en: "Stone TD: Proof of Heroes",
    },
    privacy: {
      ko: "개인정보처리방침 — 스톤 타워 디펜스: 영웅의 증명",
      en: "Privacy Policy — Stone TD: Proof of Heroes",
    },
    terms: {
      ko: "이용약관 — 스톤 타워 디펜스: 영웅의 증명",
      en: "Terms of Service — Stone TD: Proof of Heroes",
    },
    delete: {
      ko: "계정 및 데이터 삭제 — 스톤 타워 디펜스: 영웅의 증명",
      en: "Account & Data Deletion — Stone TD: Proof of Heroes",
    },
  };

  var descriptions = {
    index: {
      ko: "스톤 타워 디펜스: 영웅의 증명 — 성을 지키는 타워 디펜스 + 로그라이트 모바일 게임. 16명의 영웅과 끝없는 웨이브에 맞서보세요.",
      en: "Stone TD: Proof of Heroes — Tower defense + roguelite mobile game where you defend your castle. Challenge endless waves with 16 unique heroes.",
    },
    privacy: {
      ko: "스톤 타워 디펜스: 영웅의 증명 개인정보처리방침 — 수집하는 정보, 사용 목적, 보관 기간, 사용자 권리에 대한 안내",
      en: "Stone TD: Proof of Heroes Privacy Policy — Information we collect, purposes, retention, and user rights",
    },
    terms: {
      ko: "스톤 타워 디펜스: 영웅의 증명 서비스 이용약관 — 서비스 이용 조건, 이용자의 권리와 의무",
      en: "Stone TD: Proof of Heroes Terms of Service — Terms of use, user rights and obligations",
    },
    delete: {
      ko: "스톤 타워 디펜스: 영웅의 증명 계정 삭제 안내 — 인앱 삭제 절차, 이메일 요청 방법, 삭제 및 보관되는 데이터 유형, 처리 기간",
      en: "Stone TD: Proof of Heroes Account Deletion Guide — In-app deletion steps, email request, data types deleted/retained, processing period",
    },
  };

  /** 현재 페이지 식별 (파일명 기반) */
  function getPageId() {
    var path = window.location.pathname;
    if (path.indexOf("delete-account") !== -1) return "delete";
    if (path.indexOf("privacy") !== -1) return "privacy";
    if (path.indexOf("terms") !== -1) return "terms";
    return "index";
  }

  /** 메타 description 업데이트 */
  function updateMeta(lang) {
    var pageId = getPageId();

    // document.title 업데이트
    if (titles[pageId] && titles[pageId][lang]) {
      document.title = titles[pageId][lang];
    }

    // meta description 업데이트
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && descriptions[pageId] && descriptions[pageId][lang]) {
      metaDesc.setAttribute("content", descriptions[pageId][lang]);
    }

    // html lang 속성
    document.documentElement.lang = lang;
  }

  /** 언어 적용 */
  function applyLang(lang) {
    var body = document.body;
    body.classList.remove("show-ko", "show-en");
    body.classList.add("show-" + lang);

    updateMeta(lang);

    // 토글 버튼 라벨 업데이트
    // 현재 언어가 ko면 버튼은 "English" (클릭하면 en으로 전환)
    // 현재 언어가 en면 버튼은 "한국어"
    var switches = document.querySelectorAll(".lang-switch");
    for (var i = 0; i < switches.length; i++) {
      switches[i].textContent =
        lang === "ko" ? "🌐 English" : "🌐 한국어";
      switches[i].setAttribute(
        "aria-label",
        lang === "ko" ? "Switch to English" : "한국어로 전환"
      );
    }

    // localStorage 저장
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // 시크릿 모드 등에서 localStorage 실패 시 무시
    }
  }

  /** 토글 핸들러 */
  function toggleLang() {
    var current = document.body.classList.contains("show-en") ? "en" : "ko";
    var next = current === "ko" ? "en" : "ko";
    applyLang(next);
  }

  /** 초기화 */
  function init() {
    // 저장된 언어 로드 (없으면 기본 한국어)
    var savedLang = DEFAULT_LANG;
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "ko" || stored === "en") savedLang = stored;
    } catch (e) {
      // localStorage 접근 불가 시 기본값 사용
    }

    applyLang(savedLang);

    // 모든 .lang-switch 버튼에 이벤트 바인딩
    var switches = document.querySelectorAll(".lang-switch");
    for (var i = 0; i < switches.length; i++) {
      switches[i].addEventListener("click", function (e) {
        e.preventDefault();
        toggleLang();
      });
    }
  }

  // DOM 준비되면 초기화
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
