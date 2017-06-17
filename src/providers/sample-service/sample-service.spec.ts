import { SampleServiceProvider } from './sample-service';
 
 let sampleServiceProvider = null;

describe('Sample Service', () => {
    
    beforeEach(() => {
      sampleServiceProvider = new SampleServiceProvider();
    });

    it('should do nothing', () => {
 
        expect(true).toBeTruthy();
       // expect(true).not.toBeTruthy(); //can also use .toBeFalsy();
        expect(1 + 1).toBe(2);
       // expect(2 + 2).toBe(5); //this will fail
    });

    it('should return a non empty array', () => {
 
            let result = sampleServiceProvider.getAnswers();
 
            expect(Array.isArray(result)).toBeTruthy;
            expect(result.length).toBeGreaterThan(0);
        }
    );
 
    it('should return one random answer as a string', () => {
            expect(typeof sampleServiceProvider.getRandomAnswer()).toBe('string');
        }
    );

    it('should have both yes and no available in result set', () => {
 
            let result = sampleServiceProvider.getAnswers();
 
            expect(result).toContain('Yes');
            expect(result).toContain('No');
 
        }
    );
 
});