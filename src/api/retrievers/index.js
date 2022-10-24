/**
*
* Copyright 2022 PrimeQA Team
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

import axios from "axios";
import _ from "lodash";
import { BASE_URL } from "../config";

export const retrieversEndpoint = () => `${BASE_URL}/retrievers`;
export const retrieverCollctionsEndpoint = (retrieverID) =>
  `${BASE_URL}/retrievers/${retrieverID}/collections`;

export async function listRetrievers() {
  const config = {
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  };

  return axios
    .get(retrieversEndpoint(), config)
    .then((response) => response.data)
    .catch((error) => Promise.reject(_.get(error, "response.data") || error));
}

export async function listCollectionsForRetriever(retrieverID) {
  const config = {
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  };

  return axios
    .get(retrieverCollctionsEndpoint(retrieverID), config)
    .then((response) => response.data)
    .catch((error) => Promise.reject(_.get(error, "response.data") || error));
}
