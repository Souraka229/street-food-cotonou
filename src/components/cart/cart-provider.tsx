"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { MenuItem } from "@/lib/menu-data";

export interface CartLine extends MenuItem {
  quantity: number;
}

interface CartContextValue {
  lines: CartLine[];
  count: number;
  total: number;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  add: (item: MenuItem) => void;
  remove: (id: string) => void;
  decrement: (id: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "street-food-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines]);

  const add = useCallback((item: MenuItem) => {
    setLines((current) => {
      const existing = current.find((line) => line.id === item.id);
      if (existing) {
        return current.map((line) =>
          line.id === item.id
            ? { ...line, quantity: line.quantity + 1 }
            : line,
        );
      }
      return [...current, { ...item, quantity: 1 }];
    });
    setOpen(true);
  }, []);

  const decrement = useCallback((id: string) => {
    setLines((current) =>
      current
        .map((line) =>
          line.id === id ? { ...line, quantity: line.quantity - 1 } : line,
        )
        .filter((line) => line.quantity > 0),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setLines((current) => current.filter((line) => line.id !== id));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((sum, line) => sum + line.quantity, 0);
    const total = lines.reduce(
      (sum, line) => sum + line.quantity * line.price,
      0,
    );
    return {
      lines,
      count,
      total,
      isOpen,
      setOpen,
      add,
      remove,
      decrement,
      clear,
    };
  }, [lines, isOpen, add, remove, decrement, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}
