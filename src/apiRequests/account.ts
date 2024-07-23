import http from "@/lib/http";
import {
  AccountListResType,
  AccountResType,
  ChangePasswordBodyType,
  CreateEmployeeAccountBodyType,
  CreateGuestBodyType,
  CreateGuestResType,
  GetGuestListQueryParamsType,
  GetListGuestsResType,
  UpdateEmployeeAccountBodyType,
  UpdateMeBodyType,
} from "@/schemaValidations/account.schema";
import queryString from "query-string";

const prefix = "/accounts";
const accountApiRequest = {
  me: () => http.get<AccountResType>(`${prefix}/me`),
};

export default accountApiRequest;
