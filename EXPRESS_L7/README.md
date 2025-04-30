# Доставка еды

## Описание
API для управления блюдами и заказами в системе доставки еды.

## Сущности
1. **Блюда (Foods)**
   - Поля: `id`, `name`, `price`, `isAvailable`, `createdAt`, `ingredients`

2. **Заказы (Orders)**
   - Поля: `id`, `customerName`, `totalPrice`, `isDelivered`, `orderedAt`, `items`

## Роутинг
### Блюда
- `GET /api/v1/foods` — получить все блюда
- `GET /api/v1/foods/:id` — получить блюдо по ID
- `POST /api/v1/foods` — создать новое блюдо
- `PUT /api/v1/foods/:id` — обновить блюдо
- `PATCH /api/v1/foods/:id` — частично обновить блюдо

### Заказы
- Аналогичные маршруты для заказов.