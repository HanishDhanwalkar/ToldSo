const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe('ToldSo', function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  async function deployFixture() {
    const [owner] = await ethers.getSigners();
    const ToldSo = await ethers.getContractFactory('ToldSo');
    const toldSo = await ToldSo.deploy(unToldSoTime, { value: ToldSoedAmount });
    await toldSo.deployed()
    return  {owner,ToldSo }
  }
 

  describe("Create and read posts", function () {
    it("Should create a post", async function () {
      const {ToldSo} = await loadFixture(ToldSoFixture);
      const titile ='Hello World'
      const body ='This is my first post'
      const [owner,alice,bob] = await ethers.getSigners()

      // await toldSo.connect(ali)

      console.log(owner.address)


    });

    /*

    it("Should set the right owner", async function () {
      const { ToldSo, owner } = await loadFixture(deployOneYearToldSoFixture);

      expect(await ToldSo.owner()).to.equal(owner.address);
    });

    it("Should receive and store the funds to ToldSo", async function () {
      const { ToldSo, ToldSoedAmount } = await loadFixture(
        deployOneYearToldSoFixture
      );

      expect(await ethers.provider.getBalance(ToldSo.address)).to.equal(
        ToldSoedAmount
      );
    });

    it("Should fail if the unToldSoTime is not in the future", async function () {
      // We don't use the fixture here because we want a different deployment
      const latestTime = await time.latest();
      const ToldSo = await ethers.getContractFactory("ToldSo");
      await expect(ToldSo.deploy(latestTime, { value: 1 })).to.be.revertedWith(
        "UnToldSo time should be in the future"
      );
    });
  });

  describe("Withdrawals", function () {
    describe("Validations", function () {
      it("Should revert with the right error if called too soon", async function () {
        const { ToldSo } = await loadFixture(deployOneYearToldSoFixture);

        await expect(ToldSo.withdraw()).to.be.revertedWith(
          "You can't withdraw yet"
        );
      });

      it("Should revert with the right error if called from another account", async function () {
        const { ToldSo, unToldSoTime, otherAccount } = await loadFixture(
          deployOneYearToldSoFixture
        );

        // We can increase the time in Hardhat Network
        await time.increaseTo(unToldSoTime);

        // We use ToldSo.connect() to send a transaction from another account
        await expect(ToldSo.connect(otherAccount).withdraw()).to.be.revertedWith(
          "You aren't the owner"
        );
      });

      it("Shouldn't fail if the unToldSoTime has arrived and the owner calls it", async function () {
        const { ToldSo, unToldSoTime } = await loadFixture(
          deployOneYearToldSoFixture
        );

        // Transactions are sent using the first signer by default
        await time.increaseTo(unToldSoTime);

        await expect(ToldSo.withdraw()).not.to.be.reverted;
      });
    });

    describe("Events", function () {
      it("Should emit an event on withdrawals", async function () {
        const { ToldSo, unToldSoTime, ToldSoedAmount } = await loadFixture(
          deployOneYearToldSoFixture
        );

        await time.increaseTo(unToldSoTime);

        await expect(ToldSo.withdraw())
          .to.emit(ToldSo, "Withdrawal")
          .withArgs(ToldSoedAmount, anyValue); // We accept any value as `when` arg
      });
    });

    describe("Transfers", function () {
      it("Should transfer the funds to the owner", async function () {
        const { ToldSo, unToldSoTime, ToldSoedAmount, owner } = await loadFixture(
          deployOneYearToldSoFixture
        );

        await time.increaseTo(unToldSoTime);

        await expect(ToldSo.withdraw()).to.changeEtherBalances(
          [owner, ToldSo],
          [ToldSoedAmount, -ToldSoedAmount]
        );
      });
    });
  });
});
*/