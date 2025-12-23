# NSKLog P1 Homepage

## Dev Log 운영 정책 (중요)

이 프로젝트의 Dev Log는 **Public Repo(NSKLog/p1-homepage)에 포함**하여 운영한다.

- Dev Log 위치: `src/content/devlog/*.md`
- 배포 흐름: GitHub `p1-homepage(main)` → Vercel 자동 배포 → `www.nsklog.dev/devlog`
- 원칙: Dev Log는 사이트에 공개 노출되는 아카이브이므로 public repo 포함을 기본으로 한다.

### 과거 방식(중단)
과거에는 Dev Log를 Private Repo(`p1-homepage-content`)에서 관리하고,
빌드 전(prebuild)에 private repo를 clone하여 주입하는 방식을 사용했다.

현재는 운영 복잡도 및 인증/배포 장애 이슈로 인해 해당 방식은 중단했다.
(추후 필요 시 재도입 검토 가능)

---
