/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import config from "./config";

export const complete = () => {
  console.log("Completed mod execution");
};

export const error = (err: Error) => {
  console.log("Failed mod execution", err);
};

export const gitlabIssueCreated = (issueId: string) => {
  console.log(`Created GitLab issue for Crashlytics ID: ${issueId}`);
};

export const gitlabIssueCreating = (issueId: string) => {
  console.log(`Creating GitLab issue for Crashlytics ID: ${issueId}`);
};

export const init = () => {
  console.log("Initializing mod with configuration", config);
};

export const start = () => {
  console.log("Started mod execution with configuration", config);
};