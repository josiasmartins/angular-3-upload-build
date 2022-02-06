import { getCurrencies } from './getCurrences'

describe('getCurrences', () => {
  it('shuld return the supported currencies', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  })
})
