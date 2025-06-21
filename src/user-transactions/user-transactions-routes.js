import { Router } from 'express';
import {
  createUserTransaction,
  getAllUserTransactions,
  searchUserTransactions,
  getAllUserTransactionsByUser,
  updateUserTransaction,
  deleteUserTransaction
} from './user-transactions-controller.js';


const router = Router();

router.post("/create-user-transaction", createUserTransaction);

router.get("/get-all-user-transactions", getAllUserTransactions);

router.get("/get-all-user-transactions-by-user/:id", getAllUserTransactionsByUser);

router.post("/search-user-transactions/:term", searchUserTransactions);

router.post("/update-user-transaction/:id", updateUserTransaction);

router.post("/delete-user-transaction/:id", deleteUserTransaction);

export default router