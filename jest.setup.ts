import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { matchers, createSerializer } from '@emotion/jest';

expect.extend(matchers);
expect.addSnapshotSerializer(createSerializer());
