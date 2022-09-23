import {
  CollectionReference,
  FieldValue,
  FieldPath,
} from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import {
  ArrayElement,
  Completed_order,
  Processing_order,
  Product,
  User,
} from "../../type";
import Typesense from "typesense";

import { db } from "../../setup";
