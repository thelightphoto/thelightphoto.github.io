(() => {
  const copyBtn = document.getElementById("copyKakaoIdBtn");
  const kakaoIdEl = document.getElementById("kakaoId");
  const toast = document.getElementById("toast");

  if (!copyBtn || !kakaoIdEl) return;

  const kakaoId = (kakaoIdEl.textContent || "").trim();

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(kakaoId);
      if (toast) toast.textContent = "복사됐어요. 카카오톡에서 ID로 친구추가 해주세요.";
    } catch {
      if (toast) toast.textContent = "복사가 안 되면 ID를 길게 눌러 복사해 주세요.";
    }
    if (toast) setTimeout(() => (toast.textContent = ""), 2500);
  });
})();
