import CarbonNeutralIcon from "../../assets/images/icon-carbon-neutral.svg";

export default function CarbonNeutralCard() {
  return (
    <div className="p-3 flex justify-center gap-3 items-center bg-[#FDF6F3] rounded-lg">
      <img src={CarbonNeutralIcon} alt="Carbon Neutral Icon" />
      <p className="font-light text-[#A07370]">
        This is a <span className="font-extrabold">carbon-neutral</span>{" "}
        delivery
      </p>
    </div>
  );
}
