import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 579,
  site: "test-team",
  domains: ["test-team.deco.site"],
});