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

export class FirestoreUrlShortenerLogger {
  constructor(protected config: object) {
  }

  complete() {
    console.log("Completed execution of extension");
  };
  
  documentCreatedNoUrl() {
    console.log("Document was created without a URL, no processing is required");
  };
  
  documentCreatedWithUrl() {
    console.log("Document was created with a URL");
  };
  
  documentDeleted() {
    console.log("Document was deleted, no processing is required");
  };
  
  documentUpdatedChangedUrl() {
    console.log("Document was updated, URL has changed");
  };
  
  documentUpdatedDeletedUrl() {
    console.log("Document was updated, URL was deleted");
  };
  
  documentUpdatedNoUrl() {
    console.log("Document was updated, no URL exists, no processing is required");
  };
  
  documentUpdatedUnchangedUrl() {
    console.log(
      "Document was updated, URL has not changed, no processing is required"
    );
  };
  
  error(err: Error) {
    console.error("Error when shortening URL", err);
  };
  
  fieldNamesNotDifferent() {
    console.error(
      "The `URL` and `Short URL` field names must be different for this extension to function correctly"
    );
  };
  
  init() {
    console.log("Initializing extension with configuration", this.config);
  };
  
  shortenUrl(url: string) {
    console.log(`Shortening URL: '${url}'`);
  };
  
  shortenUrlComplete(shortUrl: string) {
    console.log(`Finished shortening URL to: '${shortUrl}'`);
  };
  
  start() {
    console.log("Started execution of extension with configuration", this.config);
  };
  
  updateDocument(path: string) {
    console.log(`Updating Cloud Firestore document: '${path}'`);
  };
  
  updateDocumentComplete(path: string) {
    console.log(`Finished updating Cloud Firestore document: '${path}'`);
  };  
}

export const logs = new FirestoreUrlShortenerLogger(config);
