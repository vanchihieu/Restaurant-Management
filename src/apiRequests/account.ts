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

  sMe: (accessToken: string) =>
    http.get<AccountResType>(`${prefix}/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),

  updateMe: (body: UpdateMeBodyType) =>
    http.put<AccountResType>(`${prefix}/me`, body),

  changePassword: (body: ChangePasswordBodyType) =>
    http.put<AccountResType>(`${prefix}/change-password`, body),
};

export default accountApiRequest;
