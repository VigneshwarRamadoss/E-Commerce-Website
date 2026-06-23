# Backend Schema

# Red B | Premium Fresh & Artisan Food E-Commerce Platform

**Version:** 1.0 | **Date:** June 2026
**ORM:** Prisma v5 | **Database:** PostgreSQL 16 (Supabase)

---

## 1. Schema Overview

```
USERS & AUTH
  User ──────────────── Address (1:many)
  User ──────────────── Order (1:many)
  User ──────────────── Review (1:many)
  User ──────────────── Wishlist (1:many)
  User ──────────────── Subscription (1:many)
  User ──────────────── Membership (1:1)
  User ──────────────── Wallet (1:1)

PRODUCTS
  Category ──────────── Category (self-referential, parent/child)
  Product ───────────── Category (many:1)
  Product ───────────── ProductVariant (1:many)
  Product ───────────── ProductImage (1:many)
  Product ───────────── TrustBadge (many:many)
  Product ───────────── HealthGoal (many:many)
  Product ───────────── Review (1:many)
  Product ───────────── InventoryLog (1:many)

ORDERS
  Order ──────────────── OrderItem (1:many)
  Order ──────────────── DeliverySlot (many:1)
  Order ──────────────── Payment (1:1)
  OrderItem ─────────── ProductVariant (many:1)
  OrderItem ─────────── Product (many:1)

DELIVERY
  Pincode ────────────── DeliveryZone (many:1)
  DeliveryZone ──────── DeliverySlot (1:many)

SUBSCRIPTIONS
  Subscription ──────── SubscriptionItem (1:many)
  Subscription ──────── SubscriptionDelivery (1:many)

PROMOTIONS
  Coupon ─────────────── CouponUsage (1:many)
  GiftCard ───────────── GiftCardTransaction (1:many)
```

---

## 2. Full Prisma Schema

```prisma
// schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ─────────────────────────────────────────
// ENUMS
// ─────────────────────────────────────────

enum UserRole {
  CUSTOMER
  ADMIN
  SUPER_ADMIN
}

enum OrderStatus {
  PENDING
  PAYMENT_PENDING
  CONFIRMED
  PROCESSING
  DISPATCHED
  DELIVERED
  CANCELLED
  REFUNDED
}

enum PaymentStatus {
  PENDING
  PROCESSING
  CAPTURED
  FAILED
  REFUNDED
  PARTIALLY_REFUNDED
}

enum PaymentMethod {
  UPI
  CARD
  NET_BANKING
  EMI
  BUY_NOW_PAY_LATER
  WALLET
  GIFT_CARD
  CASH_ON_DELIVERY
}

enum DeliveryMode {
  SAME_DAY
  SCHEDULED
  SUBSCRIPTION
}

enum SubscriptionStatus {
  ACTIVE
  PAUSED
  CANCELLED
  PAYMENT_FAILED
  EXPIRED
}

enum SubscriptionFrequency {
  WEEKLY
  BIWEEKLY
  MONTHLY
}

enum ProductVertical {
  FRESH_PRODUCE
  GOURMET_SPECIALTY
  BAKERY_ARTISAN
}

enum StockStatus {
  IN_STOCK
  LOW_STOCK
  OUT_OF_STOCK
  DISCONTINUED
  COMING_SOON
}

enum MembershipTier {
  FREE
  RED_B_MEMBER
}

enum ReviewStatus {
  PENDING
  APPROVED
  REJECTED
}

enum AddressType {
  HOME
  WORK
  OTHER
}

// ─────────────────────────────────────────
// USER & AUTH
// ─────────────────────────────────────────

model User {
  id                String      @id @default(uuid())
  phone             String      @unique
  email             String?     @unique
  name              String?
  avatarUrl         String?
  role              UserRole    @default(CUSTOMER)
  isVerified        Boolean     @default(false)
  referralCode      String      @unique @default(cuid())
  referredById      String?
  referredBy        User?       @relation("referrals", fields: [referredById], references: [id])
  referrals         User[]      @relation("referrals")
  createdAt         DateTime    @default(now())
  updatedAt         DateTime    @updatedAt
  lastLoginAt       DateTime?
  deletedAt         DateTime?

  // Relations
  addresses         Address[]
  orders            Order[]
  reviews           Review[]
  wishlistItems     WishlistItem[]
  subscriptions     Subscription[]
  membership        Membership?
  wallet            Wallet?
  notifications     NotificationPreference?

  @@index([phone])
  @@index([email])
  @@index([referralCode])
}

model Address {
  id              String      @id @default(uuid())
  userId          String
  user            User        @relation(fields: [userId], references: [id])
  type            AddressType @default(HOME)
  label           String?
  fullName        String
  phone           String
  line1           String
  line2           String?
  landmark        String?
  city            String
  state           String
  pincode         String
  latitude        Float?
  longitude       Float?
  isDefault       Boolean     @default(false)
  isServiceable   Boolean     @default(true)
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt
  deletedAt       DateTime?

  orders          Order[]

  @@index([userId])
  @@index([pincode])
}

model NotificationPreference {
  id              String    @id @default(uuid())
  userId          String    @unique
  user            User      @relation(fields: [userId], references: [id])
  whatsapp        Boolean   @default(true)
  email           Boolean   @default(true)
  pushNotif       Boolean   @default(true)
  sms             Boolean   @default(false)
  orderUpdates    Boolean   @default(true)
  promotions      Boolean   @default(true)
  subscriptionAlerts Boolean @default(true)
  updatedAt       DateTime  @updatedAt
}

// ─────────────────────────────────────────
// PRODUCTS & CATALOGUE
// ─────────────────────────────────────────

model Category {
  id              String          @id @default(uuid())
  name            String
  slug            String          @unique
  description     String?
  imageUrl        String?
  vertical        ProductVertical
  parentId        String?
  parent          Category?       @relation("subcategories", fields: [parentId], references: [id])
  children        Category[]      @relation("subcategories")
  sortOrder       Int             @default(0)
  isActive        Boolean         @default(true)
  seoTitle        String?
  seoDescription  String?
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt

  products        Product[]

  @@index([slug])
  @@index([parentId])
  @@index([vertical])
}

model Product {
  id              String          @id @default(uuid())
  name            String
  slug            String          @unique
  description     String
  shortDesc       String?
  categoryId      String
  category        Category        @relation(fields: [categoryId], references: [id])
  vertical        ProductVertical
  basePrice       Decimal         @db.Decimal(10, 2)
  mrp             Decimal         @db.Decimal(10, 2)
  taxRate         Decimal         @default(5) @db.Decimal(5, 2)
  stockStatus     StockStatus     @default(IN_STOCK)
  lowStockThreshold Int           @default(10)
  totalStock      Int             @default(0)
  isActive        Boolean         @default(true)
  isFeatured      Boolean         @default(false)
  isSubscribable  Boolean         @default(false)
  subscribeDiscount Decimal       @default(0) @db.Decimal(5, 2)

  // Rich Content
  highlights      String[]
  storageTips     String?
  usageIdeas      String?
  sourcingStory   String?
  artisanPartner  String?

  // Nutrition (JSON for flexibility)
  nutritionInfo   Json?

  // SEO
  seoTitle        String?
  seoDescription  String?
  seoKeywords     String[]

  // Algolia sync
  algoliaObjectId String?
  lastIndexedAt   DateTime?

  sortOrder       Int             @default(0)
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt
  deletedAt       DateTime?

  // Relations
  variants        ProductVariant[]
  images          ProductImage[]
  reviews         Review[]
  wishlistItems   WishlistItem[]
  trustBadges     ProductTrustBadge[]
  healthGoals     ProductHealthGoal[]
  inventoryLogs   InventoryLog[]
  orderItems      OrderItem[]
  subscriptionItems SubscriptionItem[]

  @@index([slug])
  @@index([categoryId])
  @@index([vertical])
  @@index([stockStatus])
  @@index([isFeatured])
}

model ProductVariant {
  id              String    @id @default(uuid())
  productId       String
  product         Product   @relation(fields: [productId], references: [id])
  name            String    // e.g., "500g", "1kg", "6-pack"
  sku             String    @unique
  price           Decimal   @db.Decimal(10, 2)
  mrp             Decimal   @db.Decimal(10, 2)
  stock           Int       @default(0)
  weight          Float?    // in grams
  isDefault       Boolean   @default(false)
  isActive        Boolean   @default(true)
  sortOrder       Int       @default(0)
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  orderItems      OrderItem[]
  subscriptionItems SubscriptionItem[]

  @@index([productId])
  @@index([sku])
}

model ProductImage {
  id              String    @id @default(uuid())
  productId       String
  product         Product   @relation(fields: [productId], references: [id])
  cloudflareId    String    // Cloudflare Images ID
  altText         String?
  sortOrder       Int       @default(0)
  isPrimary       Boolean   @default(false)
  createdAt       DateTime  @default(now())

  @@index([productId])
}

model TrustBadge {
  id              String    @id @default(uuid())
  name            String    @unique  // "QUALITY_CHECKED", "TRACEABLE", etc.
  label           String    // display label
  iconUrl         String?
  description     String?
  createdAt       DateTime  @default(now())

  products        ProductTrustBadge[]
}

model ProductTrustBadge {
  productId       String
  trustBadgeId    String
  product         Product     @relation(fields: [productId], references: [id])
  trustBadge      TrustBadge  @relation(fields: [trustBadgeId], references: [id])

  @@id([productId, trustBadgeId])
}

model HealthGoal {
  id              String    @id @default(uuid())
  name            String    @unique  // "HIGH_PROTEIN", "GUT_HEALTH", etc.
  label           String
  slug            String    @unique
  description     String?
  imageUrl        String?
  iconUrl         String?
  isActive        Boolean   @default(true)
  sortOrder       Int       @default(0)
  createdAt       DateTime  @default(now())

  products        ProductHealthGoal[]
}

model ProductHealthGoal {
  productId       String
  healthGoalId    String
  product         Product     @relation(fields: [productId], references: [id])
  healthGoal      HealthGoal  @relation(fields: [healthGoalId], references: [id])

  @@id([productId, healthGoalId])
}

model InventoryLog {
  id              String    @id @default(uuid())
  productId       String
  product         Product   @relation(fields: [productId], references: [id])
  variantId       String?
  delta           Int       // positive = restock, negative = sale/adjustment
  reason          String    // "SALE", "RESTOCK", "ADJUSTMENT", "RETURN"
  referenceId     String?   // orderId or purchase order ID
  adminId         String?
  createdAt       DateTime  @default(now())

  @@index([productId])
}

// ─────────────────────────────────────────
// DELIVERY & SLOTS
// ─────────────────────────────────────────

model DeliveryZone {
  id              String    @id @default(uuid())
  name            String
  city            String
  isActive        Boolean   @default(true)
  sameDayEnabled  Boolean   @default(true)
  scheduledEnabled Boolean  @default(true)
  minOrderValue   Decimal   @default(0) @db.Decimal(10, 2)
  deliveryFee     Decimal   @default(49) @db.Decimal(10, 2)
  freeDeliveryAbove Decimal @default(599) @db.Decimal(10, 2)
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  pincodes        Pincode[]
  slots           DeliverySlot[]
}

model Pincode {
  id              String        @id @default(uuid())
  pincode         String        @unique
  city            String
  state           String
  zoneId          String
  zone            DeliveryZone  @relation(fields: [zoneId], references: [id])
  isServiceable   Boolean       @default(true)
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt

  @@index([pincode])
}

model DeliverySlot {
  id              String        @id @default(uuid())
  zoneId          String
  zone            DeliveryZone  @relation(fields: [zoneId], references: [id])
  mode            DeliveryMode
  label           String        // "Morning 7–10 AM"
  startTime       String        // "07:00"
  endTime         String        // "10:00"
  availableDate   DateTime?     // null for recurring same-day
  capacity        Int           @default(50)
  booked          Int           @default(0)
  cutoffMinutes   Int           @default(120) // minutes before slot start
  isActive        Boolean       @default(true)
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt

  orders          Order[]

  @@index([zoneId])
  @@index([availableDate])
  @@index([mode])
}

// ─────────────────────────────────────────
// ORDERS
// ─────────────────────────────────────────

model Order {
  id              String        @id @default(uuid())
  orderNumber     String        @unique @default(cuid())
  userId          String
  user            User          @relation(fields: [userId], references: [id])
  addressId       String
  address         Address       @relation(fields: [addressId], references: [id])
  slotId          String?
  slot            DeliverySlot? @relation(fields: [slotId], references: [id])
  deliveryMode    DeliveryMode
  scheduledDate   DateTime?
  status          OrderStatus   @default(PENDING)
  subtotal        Decimal       @db.Decimal(10, 2)
  deliveryFee     Decimal       @db.Decimal(10, 2)
  discount        Decimal       @default(0) @db.Decimal(10, 2)
  taxAmount       Decimal       @db.Decimal(10, 2)
  totalAmount     Decimal       @db.Decimal(10, 2)
  couponCode      String?
  couponDiscount  Decimal       @default(0) @db.Decimal(10, 2)
  walletAmount    Decimal       @default(0) @db.Decimal(10, 2)
  giftCardAmount  Decimal       @default(0) @db.Decimal(10, 2)
  membershipId    String?
  subscriptionId  String?
  deliveryNotes   String?
  internalNotes   String?
  trackingUrl     String?
  deliveredAt     DateTime?
  cancelledAt     DateTime?
  cancellationReason String?
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt

  items           OrderItem[]
  payment         Payment?

  @@index([userId])
  @@index([orderNumber])
  @@index([status])
  @@index([createdAt])
}

model OrderItem {
  id              String          @id @default(uuid())
  orderId         String
  order           Order           @relation(fields: [orderId], references: [id])
  productId       String
  product         Product         @relation(fields: [productId], references: [id])
  variantId       String?
  variant         ProductVariant? @relation(fields: [variantId], references: [id])
  productName     String          // snapshot at time of order
  variantName     String?
  quantity        Int
  unitPrice       Decimal         @db.Decimal(10, 2)
  mrp             Decimal         @db.Decimal(10, 2)
  discount        Decimal         @default(0) @db.Decimal(10, 2)
  taxRate         Decimal         @db.Decimal(5, 2)
  taxAmount       Decimal         @db.Decimal(10, 2)
  totalPrice      Decimal         @db.Decimal(10, 2)
  imageUrl        String?         // snapshot
  createdAt       DateTime        @default(now())

  @@index([orderId])
  @@index([productId])
}

// ─────────────────────────────────────────
// PAYMENTS
// ─────────────────────────────────────────

model Payment {
  id                  String        @id @default(uuid())
  orderId             String        @unique
  order               Order         @relation(fields: [orderId], references: [id])
  method              PaymentMethod
  status              PaymentStatus @default(PENDING)
  amount              Decimal       @db.Decimal(10, 2)
  currency            String        @default("INR")
  razorpayOrderId     String?       @unique
  razorpayPaymentId   String?       @unique
  razorpaySignature   String?
  gatewayResponse     Json?
  failureReason       String?
  refundAmount        Decimal?      @db.Decimal(10, 2)
  refundedAt          DateTime?
  refundRazorpayId    String?
  capturedAt          DateTime?
  createdAt           DateTime      @default(now())
  updatedAt           DateTime      @updatedAt

  @@index([razorpayOrderId])
  @@index([razorpayPaymentId])
  @@index([status])
}

// ─────────────────────────────────────────
// SUBSCRIPTIONS
// ─────────────────────────────────────────

model Subscription {
  id                  String                @id @default(uuid())
  userId              String
  user                User                  @relation(fields: [userId], references: [id])
  status              SubscriptionStatus    @default(ACTIVE)
  frequency           SubscriptionFrequency @default(WEEKLY)
  deliveryDayOfWeek   Int                   // 0=Sunday, 1=Monday, ..., 6=Saturday
  preferredSlot       String                // "morning", "evening"
  nextDeliveryDate    DateTime
  pausedUntil         DateTime?
  skipsRemaining      Int                   @default(2) // per billing cycle
  razorpaySubId       String?               @unique
  razorpayPlanId      String?
  mandateId           String?
  discountPercent     Decimal               @default(5) @db.Decimal(5, 2)
  addressId           String?
  notes               String?
  cancelledAt         DateTime?
  cancellationReason  String?
  createdAt           DateTime              @default(now())
  updatedAt           DateTime              @updatedAt

  items               SubscriptionItem[]
  deliveries          SubscriptionDelivery[]

  @@index([userId])
  @@index([status])
  @@index([nextDeliveryDate])
}

model SubscriptionItem {
  id              String          @id @default(uuid())
  subscriptionId  String
  subscription    Subscription    @relation(fields: [subscriptionId], references: [id])
  productId       String
  product         Product         @relation(fields: [productId], references: [id])
  variantId       String?
  variant         ProductVariant? @relation(fields: [variantId], references: [id])
  quantity        Int
  unitPrice       Decimal         @db.Decimal(10, 2)
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt

  @@index([subscriptionId])
}

model SubscriptionDelivery {
  id              String        @id @default(uuid())
  subscriptionId  String
  subscription    Subscription  @relation(fields: [subscriptionId], references: [id])
  orderId         String?       // linked order if created
  scheduledDate   DateTime
  status          String        @default("SCHEDULED") // SCHEDULED | SKIPPED | DELIVERED | FAILED
  skippedAt       DateTime?
  createdAt       DateTime      @default(now())

  @@index([subscriptionId])
  @@index([scheduledDate])
}

// ─────────────────────────────────────────
// MEMBERSHIP
// ─────────────────────────────────────────

model Membership {
  id                  String          @id @default(uuid())
  userId              String          @unique
  user                User            @relation(fields: [userId], references: [id])
  tier                MembershipTier  @default(FREE)
  startDate           DateTime?
  endDate             DateTime?
  razorpaySubId       String?
  freeDeliveries      Boolean         @default(false)
  deliveryDiscount    Decimal         @default(0) @db.Decimal(5, 2)
  earlyAccess         Boolean         @default(false)
  isActive            Boolean         @default(false)
  autoRenew           Boolean         @default(true)
  createdAt           DateTime        @default(now())
  updatedAt           DateTime        @updatedAt
}

// ─────────────────────────────────────────
// WALLET & CREDITS
// ─────────────────────────────────────────

model Wallet {
  id              String              @id @default(uuid())
  userId          String              @unique
  user            User                @relation(fields: [userId], references: [id])
  balance         Decimal             @default(0) @db.Decimal(10, 2)
  createdAt       DateTime            @default(now())
  updatedAt       DateTime            @updatedAt

  transactions    WalletTransaction[]
}

model WalletTransaction {
  id              String    @id @default(uuid())
  walletId        String
  wallet          Wallet    @relation(fields: [walletId], references: [id])
  amount          Decimal   @db.Decimal(10, 2)  // positive=credit, negative=debit
  type            String    // "REFUND", "REFERRAL", "PROMO", "ORDER_DEBIT", "CASHBACK"
  description     String
  referenceId     String?   // orderId, referralId, etc.
  createdAt       DateTime  @default(now())

  @@index([walletId])
}

// ─────────────────────────────────────────
// PROMOTIONS & COUPONS
// ─────────────────────────────────────────

model Coupon {
  id                  String    @id @default(uuid())
  code                String    @unique
  description         String?
  type                String    // "PERCENT", "FLAT", "FREE_DELIVERY", "CASHBACK"
  value               Decimal   @db.Decimal(10, 2)
  minOrderValue       Decimal   @default(0) @db.Decimal(10, 2)
  maxDiscount         Decimal?  @db.Decimal(10, 2)
  maxUsesTotal        Int?
  maxUsesPerUser      Int       @default(1)
  usedCount           Int       @default(0)
  applicableVerticals ProductVertical[]
  isActive            Boolean   @default(true)
  startsAt            DateTime?
  expiresAt           DateTime?
  createdAt           DateTime  @default(now())
  updatedAt           DateTime  @updatedAt

  usages              CouponUsage[]

  @@index([code])
  @@index([isActive])
}

model CouponUsage {
  id              String    @id @default(uuid())
  couponId        String
  coupon          Coupon    @relation(fields: [couponId], references: [id])
  userId          String
  orderId         String
  discountAmount  Decimal   @db.Decimal(10, 2)
  usedAt          DateTime  @default(now())

  @@unique([couponId, userId, orderId])
  @@index([couponId])
  @@index([userId])
}

model GiftCard {
  id              String    @id @default(uuid())
  code            String    @unique
  initialAmount   Decimal   @db.Decimal(10, 2)
  balance         Decimal   @db.Decimal(10, 2)
  purchasedByUserId String?
  isActive        Boolean   @default(true)
  expiresAt       DateTime?
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  transactions    GiftCardTransaction[]

  @@index([code])
}

model GiftCardTransaction {
  id              String    @id @default(uuid())
  giftCardId      String
  giftCard        GiftCard  @relation(fields: [giftCardId], references: [id])
  userId          String?
  orderId         String?
  amount          Decimal   @db.Decimal(10, 2)  // negative = redemption
  type            String    // "PURCHASE", "REDEMPTION", "REFUND"
  createdAt       DateTime  @default(now())

  @@index([giftCardId])
}

// ─────────────────────────────────────────
// REVIEWS
// ─────────────────────────────────────────

model Review {
  id              String          @id @default(uuid())
  productId       String
  product         Product         @relation(fields: [productId], references: [id])
  userId          String
  user            User            @relation(fields: [userId], references: [id])
  orderId         String?
  rating          Int             // 1–5
  title           String?
  body            String?
  imageUrls       String[]
  status          ReviewStatus    @default(PENDING)
  adminNote       String?
  helpfulCount    Int             @default(0)
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt

  @@unique([productId, userId, orderId])
  @@index([productId])
  @@index([userId])
  @@index([status])
}

// ─────────────────────────────────────────
// WISHLIST
// ─────────────────────────────────────────

model WishlistItem {
  id              String    @id @default(uuid())
  userId          String
  user            User      @relation(fields: [userId], references: [id])
  productId       String
  product         Product   @relation(fields: [productId], references: [id])
  createdAt       DateTime  @default(now())

  @@unique([userId, productId])
  @@index([userId])
}

// ─────────────────────────────────────────
// CONTENT & BANNERS
// ─────────────────────────────────────────

model Banner {
  id              String    @id @default(uuid())
  title           String
  imageUrl        String
  mobileImageUrl  String?
  linkUrl         String?
  position        String    // "hero", "promo-bar", "mid-page", "category-top"
  isActive        Boolean   @default(true)
  startsAt        DateTime?
  endsAt          DateTime?
  sortOrder       Int       @default(0)
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}

model Recipe {
  id              String    @id @default(uuid())
  title           String
  slug            String    @unique
  description     String
  imageUrl        String
  prepTime        Int       // minutes
  cookTime        Int       // minutes
  servings        Int
  difficulty      String    // "easy", "medium", "hard"
  body            String    // rich text / markdown
  videoUrl        String?
  isActive        Boolean   @default(true)
  isFeatured      Boolean   @default(false)
  seoTitle        String?
  seoDescription  String?
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  ingredients     RecipeIngredient[]
}

model RecipeIngredient {
  id              String    @id @default(uuid())
  recipeId        String
  recipe          Recipe    @relation(fields: [recipeId], references: [id])
  productId       String?   // linked product (nullable for non-stocked items)
  name            String
  quantity        String    // "2 cups", "200g"
  sortOrder       Int       @default(0)

  @@index([recipeId])
}

// ─────────────────────────────────────────
// ADMIN AUDIT LOG
// ─────────────────────────────────────────

model AuditLog {
  id              String    @id @default(uuid())
  adminId         String
  action          String    // "CREATE_PRODUCT", "UPDATE_ORDER_STATUS", etc.
  entityType      String    // "Product", "Order", etc.
  entityId        String
  before          Json?
  after           Json?
  ipAddress       String?
  createdAt       DateTime  @default(now())

  @@index([adminId])
  @@index([entityType, entityId])
}
```

---

## 3. Key Database Indexes Summary

```sql
-- Performance-critical additional indexes
CREATE INDEX idx_products_vertical_active ON "Product"(vertical, "isActive");
CREATE INDEX idx_products_featured_active ON "Product"("isFeatured", "isActive");
CREATE INDEX idx_orders_user_status ON "Order"("userId", status);
CREATE INDEX idx_orders_created_desc ON "Order"("createdAt" DESC);
CREATE INDEX idx_subscription_next_delivery ON "Subscription"("nextDeliveryDate", status);
CREATE INDEX idx_review_product_status ON "Review"("productId", status, rating);
CREATE INDEX idx_coupon_code_active ON "Coupon"(code, "isActive");
```

---

## 4. Row Level Security (Supabase RLS)

```sql
-- Users can only read/write their own data
ALTER TABLE "Order" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "user_own_orders" ON "Order"
  FOR ALL USING (auth.uid()::text = "userId");

ALTER TABLE "Address" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "user_own_addresses" ON "Address"
  FOR ALL USING (auth.uid()::text = "userId");

ALTER TABLE "Subscription" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "user_own_subscriptions" ON "Subscription"
  FOR ALL USING (auth.uid()::text = "userId");

-- Products readable by all, writable by admin only
ALTER TABLE "Product" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "products_read_all" ON "Product"
  FOR SELECT USING (true);
CREATE POLICY "products_admin_write" ON "Product"
  FOR ALL USING (
    EXISTS (SELECT 1 FROM "User" WHERE id = auth.uid()::text AND role IN ('ADMIN', 'SUPER_ADMIN'))
  );
```

---

## 5. Computed Aggregates (Materialized Views)

```sql
-- Product rating summary (refreshed on review approve)
CREATE MATERIALIZED VIEW product_rating_summary AS
SELECT
  "productId",
  COUNT(*) as review_count,
  AVG(rating)::DECIMAL(3,2) as avg_rating,
  COUNT(CASE WHEN rating = 5 THEN 1 END) as five_star,
  COUNT(CASE WHEN rating = 4 THEN 1 END) as four_star,
  COUNT(CASE WHEN rating = 3 THEN 1 END) as three_star,
  COUNT(CASE WHEN rating = 2 THEN 1 END) as two_star,
  COUNT(CASE WHEN rating = 1 THEN 1 END) as one_star
FROM "Review"
WHERE status = 'APPROVED'
GROUP BY "productId";

CREATE UNIQUE INDEX ON product_rating_summary ("productId");

-- Top selling products (refreshed daily)
CREATE MATERIALIZED VIEW top_selling_products AS
SELECT
  oi."productId",
  COUNT(DISTINCT oi."orderId") as order_count,
  SUM(oi.quantity) as units_sold,
  SUM(oi."totalPrice") as revenue
FROM "OrderItem" oi
JOIN "Order" o ON oi."orderId" = o.id
WHERE o.status = 'DELIVERED'
  AND o."createdAt" > NOW() - INTERVAL '30 days'
GROUP BY oi."productId"
ORDER BY revenue DESC;
```

---

## 6. Redis Data Structures

```
# User Sessions
session:{userId} → JSON (user profile, membership, active delivery zone) | TTL: 24h

# Cart (guest and user)
cart:{sessionId} → JSON (items[], deliveryMode, slotId, coupon) | TTL: 30 days
cart:{userId}    → JSON (merged cart) | TTL: 30 days

# Delivery Slot Availability
slots:{zoneId}:{date} → Hash { slotId: remaining_capacity } | TTL: 2 min

# Pincode Serviceability
pincode:{pin} → JSON { serviceable, zoneId, deliveryFee } | TTL: 24h

# Rate Limiting
ratelimit:{ip}:{endpoint} → counter | TTL: 60s (sliding window)

# Product Price Cache (for fast cart recalculation)
product_price:{productId}:{variantId} → JSON { price, mrp, stock } | TTL: 60s

# OTP Store
otp:{phone} → { hash, expiresAt, attempts } | TTL: 10 min
```
