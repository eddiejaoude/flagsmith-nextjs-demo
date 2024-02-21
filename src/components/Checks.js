"use client";

import {
  ExclamationTriangleIcon,
  MusicalNoteIcon,
  LinkIcon,
} from "@heroicons/react/20/solid";
import { useFlagsmith } from "flagsmith/react";

const repo = {
  id: 405139301,
  node_id: "MDEwOlJlcG9zaXRvcnk0MDUxMzkzMDE=",
  name: "BioDrop",
  full_name: "EddieHubCommunity/BioDrop",
  private: false,
  owner: {
    login: "EddieHubCommunity",
    id: 66388388,
    node_id: "MDEyOk9yZ2FuaXphdGlvbjY2Mzg4Mzg4",
    avatar_url: "https://avatars.githubusercontent.com/u/66388388?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/EddieHubCommunity",
    html_url: "https://github.com/EddieHubCommunity",
    followers_url: "https://api.github.com/users/EddieHubCommunity/followers",
    following_url:
      "https://api.github.com/users/EddieHubCommunity/following{/other_user}",
    gists_url: "https://api.github.com/users/EddieHubCommunity/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/EddieHubCommunity/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/EddieHubCommunity/subscriptions",
    organizations_url: "https://api.github.com/users/EddieHubCommunity/orgs",
    repos_url: "https://api.github.com/users/EddieHubCommunity/repos",
    events_url:
      "https://api.github.com/users/EddieHubCommunity/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/EddieHubCommunity/received_events",
    type: "Organization",
    site_admin: false,
  },
  html_url: "https://github.com/EddieHubCommunity/BioDrop",
  description:
    "Connect to your audience with a single link. Showcase the content you create and your projects in one place. Make it easier for people to find, follow and subscribe.",
  fork: false,
  url: "https://api.github.com/repos/EddieHubCommunity/BioDrop",
  forks_url: "https://api.github.com/repos/EddieHubCommunity/BioDrop/forks",
  keys_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/keys{/key_id}",
  collaborators_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/collaborators{/collaborator}",
  teams_url: "https://api.github.com/repos/EddieHubCommunity/BioDrop/teams",
  hooks_url: "https://api.github.com/repos/EddieHubCommunity/BioDrop/hooks",
  issue_events_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/issues/events{/number}",
  events_url: "https://api.github.com/repos/EddieHubCommunity/BioDrop/events",
  assignees_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/assignees{/user}",
  branches_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/branches{/branch}",
  tags_url: "https://api.github.com/repos/EddieHubCommunity/BioDrop/tags",
  blobs_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/git/blobs{/sha}",
  git_tags_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/git/tags{/sha}",
  git_refs_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/git/refs{/sha}",
  trees_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/git/trees{/sha}",
  statuses_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/statuses/{sha}",
  languages_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/languages",
  stargazers_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/stargazers",
  contributors_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/contributors",
  subscribers_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/subscribers",
  subscription_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/subscription",
  commits_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/commits{/sha}",
  git_commits_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/git/commits{/sha}",
  comments_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/comments{/number}",
  issue_comment_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/issues/comments{/number}",
  contents_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/contents/{+path}",
  compare_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/compare/{base}...{head}",
  merges_url: "https://api.github.com/repos/EddieHubCommunity/BioDrop/merges",
  archive_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/{archive_format}{/ref}",
  downloads_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/downloads",
  issues_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/issues{/number}",
  pulls_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/pulls{/number}",
  milestones_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/milestones{/number}",
  notifications_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/notifications{?since,all,participating}",
  labels_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/labels{/name}",
  releases_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/releases{/id}",
  deployments_url:
    "https://api.github.com/repos/EddieHubCommunity/BioDrop/deployments",
  created_at: "2021-09-10T16:08:27Z",
  updated_at: "2024-02-10T05:38:54Z",
  pushed_at: "2024-02-08T20:34:09Z",
  git_url: "git://github.com/EddieHubCommunity/BioDrop.git",
  ssh_url: "git@github.com:EddieHubCommunity/BioDrop.git",
  clone_url: "https://github.com/EddieHubCommunity/BioDrop.git",
  svn_url: "https://github.com/EddieHubCommunity/BioDrop",
  homepage: "https://biodrop.io",
  size: 42703,
  stargazers_count: 5639,
  watchers_count: 5639,
  language: "JavaScript",
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: false,
  has_pages: true,
  has_discussions: true,
  forks_count: 4012,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 102,
  license: {
    key: "mit",
    name: "MIT License",
    spdx_id: "MIT",
    url: "https://api.github.com/licenses/mit",
    node_id: "MDc6TGljZW5zZTEz",
  },
  allow_forking: true,
  is_template: false,
  web_commit_signoff_required: false,
  topics: [
    "css",
    "docker",
    "hacktoberfest",
    "html",
    "javascript",
    "mongodb",
    "nextjs",
    "nodejs",
    "reactjs",
    "tailwind",
  ],
  visibility: "public",
  forks: 4012,
  open_issues: 102,
  watchers: 5639,
  default_branch: "main",
  temp_clone_token: null,
  custom_properties: {},
  organization: {
    login: "EddieHubCommunity",
    id: 66388388,
    node_id: "MDEyOk9yZ2FuaXphdGlvbjY2Mzg4Mzg4",
    avatar_url: "https://avatars.githubusercontent.com/u/66388388?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/EddieHubCommunity",
    html_url: "https://github.com/EddieHubCommunity",
    followers_url: "https://api.github.com/users/EddieHubCommunity/followers",
    following_url:
      "https://api.github.com/users/EddieHubCommunity/following{/other_user}",
    gists_url: "https://api.github.com/users/EddieHubCommunity/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/EddieHubCommunity/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/EddieHubCommunity/subscriptions",
    organizations_url: "https://api.github.com/users/EddieHubCommunity/orgs",
    repos_url: "https://api.github.com/users/EddieHubCommunity/repos",
    events_url:
      "https://api.github.com/users/EddieHubCommunity/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/EddieHubCommunity/received_events",
    type: "Organization",
    site_admin: false,
  },
  network_count: 4012,
  subscribers_count: 54,
};

const checks = () => {
  return [
    {
      id: "description",
      icon: ExclamationTriangleIcon,
      name: "Description",
      description: "Does the repo have a description?",
      action: () =>
        repo.description ? "No Action Required" : "Add Description",
      priority: () => (repo.description ? "low" : "high"),
    },
    {
      id: "url",
      icon: LinkIcon,
      name: "Url",
      description: "Does the repo have a URL?",
      action: () => (repo.homepage ? "No Action Required" : "Add URL"),
      priority: () => (repo.homepage ? "low" : "high"),
    },
    {
      id: "topics",
      icon: MusicalNoteIcon,
      name: "Topics",
      description: "Does the repo have a list of topics?",
      action: () => {
        if (repo.topics.length === 0) {
          return "Add topics";
        }
        if (repo.topics.length < 3) {
          return "Add a few more topics";
        }
        if (repo.topics.length > 20) {
          return "Consider removing some topics";
        }

        return "No Action Required";
      },
      priority: () => {
        if (repo.topics.length === 0) {
          return "high";
        }
        if (repo.topics.length < 3) {
          return "medium";
        }
        if (repo.topics.length > 20) {
          return "medium";
        }

        return "low";
      },
    },
  ];
};

export default function Checks() {
  const flagsmith = useFlagsmith();
  const free = flagsmith.getValue("free", { json: true });
  console.log("++++", free);

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {checks()
        .filter((check) => free.includes(check.id))
        .map((check) => (
          <li key={check.name} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <check.icon className="h-12 w-12 flex-none rounded-full text-gray-500" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {check.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {check.description}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                {check.action()}
              </p>
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">
                  {check.priority()}
                </p>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}
