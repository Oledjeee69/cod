<section class="calculator" id="calculator" aria-labelledby="calculator-title">
    <div class="container">
        <div class="calculator__head">
            <h2 class="calculator__title" id="calculator-title">Калькулятор лизинга</h2>
            <p class="calculator__subtitle">Укажите параметры — мы покажем ориентировочный ежемесячный платёж</p>
        </div>

        <div class="calculator__grid">
            <form class="calculator__form calc" id="calc-form" novalidate>
                <div class="calc__field">
                    <div class="calc__row">
                        <label class="calc__label" for="car-price">Стоимость автомобиля, ₽</label>
                        <output class="calc__value" id="car-price-out" for="car-price car-price-range">3 300 000</output>
                    </div>
                    <input class="calc__range" type="range" id="car-price-range" name="carPriceRange" min="1500000" max="10000000" step="50000" value="3300000" />
                    <input class="calc__input" type="text" id="car-price" name="carPrice" inputmode="numeric" autocomplete="off" value="3 300 000" />
                </div>

                <div class="calc__field">
                    <div class="calc__row">
                        <label class="calc__label" for="down-payment">Первоначальный взнос, ₽</label>
                        <output class="calc__value" id="down-payment-out" for="down-payment down-payment-range">
                            <span id="down-payment-value">660 000</span>
                            <span class="calc__percent" id="down-percent">(20%)</span>
                        </output>
                    </div>
                    <input class="calc__range" type="range" id="down-payment-range" name="downPaymentRange" min="10" max="60" step="1" value="20" />
                    <input class="calc__input" type="text" id="down-payment" name="downPayment" inputmode="numeric" autocomplete="off" value="660 000" />
                </div>

                <div class="calc__field">
                    <div class="calc__row">
                        <label class="calc__label" for="lease-term">Срок лизинга, мес.</label>
                        <output class="calc__value" id="lease-term-out" for="lease-term lease-term-range">36</output>
                    </div>
                    <input class="calc__range" type="range" id="lease-term-range" name="leaseTermRange" min="6" max="120" step="1" value="36" />
                    <input class="calc__input calc__input--short" type="number" id="lease-term" name="leaseTerm" min="6" max="120" value="36" />
                </div>

                <div class="calc__result">
                    <p class="calc__result-label">Ежемесячный платёж</p>
                    <p class="calc__result-value" id="monthly-payment">89 450 ₽</p>
                </div>

                <button class="button button--primary button--full calc__submit" type="submit" id="submit-btn">Оформить заявку</button>
            </form>

            <aside class="calculator__aside aside-card" aria-label="Условия лизинга">
                <h3 class="aside-card__title">Что входит в расчёт</h3>
                <ul class="aside-card__list">
                    <li class="aside-card__item">Ставка ориентировочная — уточняется менеджером</li>
                    <li class="aside-card__item">Первоначальный взнос от 10% до 60%</li>
                    <li class="aside-card__item">Срок — от 6 до 120 месяцев</li>
                </ul>
                <p class="aside-card__note">Расчёт носит информационный характер и не является публичной офертой.</p>
            </aside>
        </div>
    </div>
</section>
