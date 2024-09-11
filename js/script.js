// 홈 섹션 및 비디오 요소 선택
const homeSection = document.querySelector("#home");
const homeVideo = document.querySelector(".home-video");

// 마우스가 홈 섹션에 들어왔을 때 비디오 재생
homeSection.addEventListener("mouseenter", () => {
  // 비디오가 준비된 경우에만 재생 시도
  if (homeVideo.readyState >= 2) {
    const playPromise = homeVideo.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("Video is playing");
        })
        .catch((error) => {
          console.error("Video play failed:", error);
        });
    }
  }
});

// 마우스가 홈 섹션을 벗어났을 때 비디오 일시 정지
homeSection.addEventListener("mouseleave", () => {
  homeVideo.pause();
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  const closeModal = document.querySelector(".close-modal");

  // 모든 비디오 요소를 선택
  const videoThumbnails = document.querySelectorAll(".content2-video video");

  videoThumbnails.forEach((video) => {
    video.addEventListener("click", function () {
      // 비디오의 src를 모달 비디오에 설정
      modalVideo.src = video.querySelector("source").src;
      // 모달을 표시
      modal.style.display = "flex";
      // 모달 비디오 재생
      modalVideo.play();
    });
  });

  // 모달 닫기 버튼 클릭 시
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    modalVideo.pause(); // 비디오 일시 정지
    modalVideo.src = ""; // 비디오 src 초기화
  });

  // 모달 외부 클릭 시 모달 닫기
  window.addEventListener("click", function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
      modalVideo.pause(); // 비디오 일시 정지
      modalVideo.src = ""; // 비디오 src 초기화
    }
  });
});
