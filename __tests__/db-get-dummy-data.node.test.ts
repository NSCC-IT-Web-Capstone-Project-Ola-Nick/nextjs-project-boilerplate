// this doesn't work yet
import { mockDeep, mockReset } from "jest-mock-extended";
import { prismaMock } from "../mockPrismaDBSingleton";



describe('SampleData operations', () => {
  afterEach(() => {
    mockReset(prismaMock)
  })

  it('should create and find SampleData object', async () => {
    // Mock data for a SampleData object
    const sampleDataInput = {
      dataname: 'TestName',
      datacontent: 'TestContent',
    };

    // Mock the creation of a SampleData object
    prismaMock.sampleData.create.mockResolvedValue({ id: 1, ...sampleDataInput });

    // Call the generic create function
    const createdSampleData = await prismaMock.sampleData.create({
      data: sampleDataInput,
    });

    // Assert that the creation function was called with the correct input
    expect(prismaMock.sampleData.create).toHaveBeenCalledWith({
      data: sampleDataInput,
    });

    // Mock the retrieval of a SampleData object by id
    prismaMock.sampleData.findUnique.mockResolvedValue(createdSampleData);

    // Call the generic findUnique function by id
    const foundById = await prismaMock.sampleData.findUnique({
      where: { id: 1 },
    });

    console.log(foundById);

    // Assert that the findUnique function was called with the correct id
    expect(prismaMock.sampleData.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
    });

    // Assert that the returned object matches the expected created object
    expect(foundById).toEqual(createdSampleData);
  });
});
