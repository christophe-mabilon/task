import { DateFormatPipe } from './date-format.pipe';

describe('DateFormatPipe', () => {
  let pipe: DateFormatPipe;

  beforeEach(() => {
    pipe = new DateFormatPipe();
  });

  it('should transform a valid date', () => {
    const inputDate = new Date('2023-08-30T12:00:00Z'); // Replace with your test date
    const expectedResult = '30-08-2023';

    const transformedDate = pipe.transform(inputDate);

    expect(transformedDate).toEqual(expectedResult);
  });

  it('should handle null input', () => {
    const inputDate = null;
    const expectedResult = '';

    const transformedDate = pipe.transform(inputDate);

    expect(transformedDate).toEqual(expectedResult);
  });

  it('should handle invalid input', () => {
    const inputDate = 'invalid-date';
    const expectedResult = '';

    const transformedDate = pipe.transform(inputDate);

    expect(transformedDate).toEqual(expectedResult);
  });
});
